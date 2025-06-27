import * as P from "../ui/PostListItem.style";

export default function PostListItem({ post }) {
  return (
    <P.PostListContainer>
      <P.PostList to={`/posts/${post.id}`}>{post.title}</P.PostList>
    </P.PostListContainer>
  );
}
