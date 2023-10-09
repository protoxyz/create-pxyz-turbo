"use client";

import { api } from "@/lib/api";

export function PostsList() {
  const query = api.posts.list.useQuery();

  return (
    <div>
      <div className="text-2xl font-bold">Posts</div>
      <div className="flex flex-col gap-4">
        {query.data?.map((post) => (
          <div key={post.id} className="border-muted border-b py-4">
            <div className="text-lg font-bold">{post.title}</div>
            <div className="text-gray-500">{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
