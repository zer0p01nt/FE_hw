import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../ui/CommonStyle";
import * as B from "../ui/Button";
import * as T from "../ui/TextInput";

export default function PostWritePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && titleRef.current && contentRef.current) {
      setIsLoading(true);

      const title = titleRef.current.value;
      const content = contentRef.current.value;

      if (!title) {
        alert("제목을 입력해주세요.");
      } else if (!content) {
        alert("내용을 입력해주세요.");
      } else {
        fetch(`http://localhost:3001/posts/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            comments: [],
          }),
        }).then((res) => {
          if (res.ok) {
            alert("글이 작성되었습니다.");
            navigate("/");
            setIsLoading(false);
          }
        });
      }
    }
  }

  return (
    <S.MainContainer>
      <S.BlogTitle to='/'>소플의 미니 블로그</S.BlogTitle>
      <S.BlogForm onSubmit={onSubmit}>
        <T.TitleInput className='title' ref={titleRef} />
        <T.ContentInput className='content' ref={contentRef} />
        <B.BlogButton>글 작성하기</B.BlogButton>
      </S.BlogForm>
    </S.MainContainer>
  );
}
