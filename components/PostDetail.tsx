import type { Post } from "@/lib/schemas";

// 3: Ergänze 'use client', eine promise-Prop und use(promise).
// Den passenden Typ findest du in ../lib/schemas.ts.

export default function PostDetail({ post }: { post: Post }) {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
