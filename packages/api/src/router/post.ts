import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { userOwnsPost } from "../lib/authorizations";
import { createPostSchema, updatePostSchema } from "../schemas/post";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({});
  }),

  create: protectedProcedure
    .input(createPostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({
        data: {
          title: input.title,
          body: input.body,
          userId: ctx.user.sub,
        },
      });
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      if (!(await userOwnsPost(ctx.prisma, ctx.user, input.id))) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to access this post.",
        });
      }

      return await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });
    }),

  update: protectedProcedure
    .input(updatePostSchema)
    .mutation(async ({ ctx, input }) => {
      if (!(await userOwnsPost(ctx.prisma, ctx.user, input.id))) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to update this post.",
        });
      }

      return await ctx.prisma.post.update({
        where: { id: input.id },
        data: {
          title: input.title,
          ...(input.body ? { body: input.body } : {}),
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      if (!(await userOwnsPost(ctx.prisma, ctx.user, input.id))) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to delete this post.",
        });
      }

      return await ctx.prisma.post.delete({
        where: { id: input.id },
      });
    }),
});
