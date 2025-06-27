import styled from "styled-components";

export const CommentContainer = styled.div`
  border: var(--border);
  border-radius: var(--radius);
  padding: var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentContent = styled.div`
  width: 90%;
`;

export const CommentDelBtn = styled.button`
  width: 50px;
  height: 30px;
  word-wrap: nowrap;
  padding: 0;
`;
