import styled from "styled-components";

export const ContentContainer = styled.div`
  border: var(--border);
  padding: 25px 10px;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PostDelBtn = styled.button`
  margin: 0;
`;
