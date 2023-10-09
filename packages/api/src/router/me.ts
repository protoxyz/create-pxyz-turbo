import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  profile: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});
