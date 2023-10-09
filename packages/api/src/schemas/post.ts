import { z } from "zod";

export const postOutputSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1),
  body: z.string(),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const createPostSchema = z.object({
  title: z.string().min(1),
  body: z.string(),
});

export const updatePostSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1).optional(),
  body: z.string().nullable().optional(),
});

export const listPostsSchema = z.array(postOutputSchema);
