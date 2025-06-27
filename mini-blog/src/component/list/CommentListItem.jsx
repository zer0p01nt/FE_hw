import { useNavigate } from "react-router-dom";
import * as C from "../ui/CommentListItem.style";

export default function CommentListItem({ comment, post }) {
  const navigate = useNavigate();

  function commentDel() {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      const reloadedComments = post.comments.filter(
        (com) => com.id !== comment.id
      );
      // filter는 조건이 참이면 냅두고 거짓이면 지움. 그래서 일치하지 않는다는 조건이어야 일치하는 것만 지워짐.
      fetch(`http://localhost:3001/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          comments: reloadedComments,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("댓글이 삭제되었습니다.");
          navigate(0);
        }
      });
    }
  }

  return (
    <C.CommentContainer>
      <C.CommentContent>{comment.content}</C.CommentContent>
      <C.CommentDelBtn onClick={commentDel}>삭제</C.CommentDelBtn>
    </C.CommentContainer>
  );
}
