import { getPost } from "@/lib/api";
import PostDetail from "../../../components/PostDetail";

// 2: Lade den Post mit await und zeige Titel und Text direkt in dieser Page.
// Die URL-Parameter bekommst du als params: Promise<{ id: string }>.
// Mache die Page async und lies die ID mit: const { id } = await params;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);
  console.log(post);

  return (
    <>
      <h1>Ein Post</h1>
      <PostDetail post={post} />
    </>
  );
}
