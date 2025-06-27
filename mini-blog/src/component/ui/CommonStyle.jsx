import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogTitle = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  padding: 30px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  gap: 10px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BlogForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
