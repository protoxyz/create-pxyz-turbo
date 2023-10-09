import type { PrismaClient } from "@acme/db/types";
import type { SessionUser } from "@protoxyz/types";

export async function userOwnsPost(
  prisma: PrismaClient,
  user: SessionUser,
  postId: string,
) {
  return (
    (await prisma.post.count({
      where: {
        id: postId,
        userId: user.sub,
      },
    })) > 0
  );
}
