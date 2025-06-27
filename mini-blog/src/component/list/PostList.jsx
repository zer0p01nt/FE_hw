import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import * as S from "../ui/CommonStyle";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <S.ListContainer>
      {posts.map((post) => (
        <div>
          <PostListItem key={post.id} post={post} />
        </div>
      ))}
    </S.ListContainer>
  );
}
