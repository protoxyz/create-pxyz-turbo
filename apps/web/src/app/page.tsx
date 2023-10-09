import { Container } from "@/components/container";
import { CreatePostForm } from "@/components/posts/create-form";
import { PostsList } from "@/components/posts/list";

export default function Home() {
  return (
    <main className="relative flex h-full min-h-screen flex-col  ">
      <Container size="lg" className="rounded-lg bg-white p-5">
        <PostsList />
        <CreatePostForm />
      </Container>
    </main>
  );
}
