import { userRouter } from "./router/me";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  me: userRouter,
  posts: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
