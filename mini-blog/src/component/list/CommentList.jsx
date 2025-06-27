import * as S from "../ui/CommonStyle";
import CommentListItem from "./CommentListItem";

export default function CommentList({ post }) {
  //useEffect

  return (
    <S.ListContainer>
      {post.comments.map((comment) => (
        <CommentListItem comment={comment} post={post} key={comment.id} />
      ))}
    </S.ListContainer>
  );
}
