import { Link } from "react-router-dom";
import PostList from "../list/PostList";
import * as B from "../ui/Button";
import * as S from "../ui/CommonStyle";

export default function MainPage() {
  return (
    <S.MainContainer>
      <S.BlogTitle to='/'>소플의 미니 블로그</S.BlogTitle>
      <S.InnerContainer>
        <B.BlogButton>
          <Link to='/write'>글 작성하기</Link>
        </B.BlogButton>
        <PostList />
      </S.InnerContainer>
    </S.MainContainer>
  );
}
