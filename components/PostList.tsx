import { Post } from "@/lib/schemas";
import Link from "next/link";

// Platzhalter: Die Posts-Page zeigt später eine PostPreview pro Eintrag.
// Diese Datei kann danach entfernt werden, sobald kein Import mehr darauf verweist.

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
