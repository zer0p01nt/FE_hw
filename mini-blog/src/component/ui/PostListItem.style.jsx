import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostListContainer = styled.div`
  border: var(--border);
  border-radius: var(--radius);
  padding: var(--padding);
`;

export const PostList = styled(Link)`
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: gray;
  }
`;
