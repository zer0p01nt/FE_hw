import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import * as S from "../ui/CommonStyle";
import * as B from "../ui/Button";
import * as T from "../ui/TextInput";
import * as V from "../ui/PostViewPage.style";

export default function PostViewPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const commentRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  function submitComment() {
    if (!isLoading && post && commentRef.current) {
      setIsLoading(true);
      const updatedComments = [
        ...post.comments,
        {
          id: Date.now(),
          content: commentRef.current.value,
        },
      ];

      fetch(`http://localhost:3001/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          comments: updatedComments,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("댓글이 작성되었습니다.");
          navigate(`/posts/${id}`);
          setIsLoading(false);
          commentRef.current.value = "";
        }
      });
    }
  }

  const handleBack = () => {
    navigate(-1);
  };

  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          alert("삭제되었습니다.");
          navigate("/");
        }
      });
    }
  }

  if (!post) return <div>Loading...</div>;

  return (
    <S.MainContainer>
      <S.InnerContainer>
        <B.BlogButton onClick={handleBack}>뒤로 가기</B.BlogButton>
        <V.ContentContainer>
          <V.PostTitle>{post.title}</V.PostTitle>
          {post.content.split("\n").map((content) => (
            <div>{content}</div>
          ))}
        </V.ContentContainer>
        <V.ButtonContainer>
          <div style={{ fontWeight: 500 }}>댓글</div>
          <V.PostDelBtn onClick={del}>삭제</V.PostDelBtn>
        </V.ButtonContainer>
        <CommentList post={post} />
        <S.BlogForm onSubmit={submitComment}>
          <T.CommentInput ref={commentRef} className='commentInput' />
          <B.BlogButton>댓글 작성하기</B.BlogButton>
        </S.BlogForm>
      </S.InnerContainer>
    </S.MainContainer>
  );
}
