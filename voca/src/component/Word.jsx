import { useState } from "react";
import styled from "styled-components";

const TableData = styled.td`
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;

  &:first-child {
    width: 10%;
  }

  .off & {
    background: #eee;
    color: #ccc;
  }
`;

const DeleteBtn = styled.button`
  margin-left: 10px;
  color: #fff;
  background-color: firebrick;
`;

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({
            ...word,
            id: 0,
          });
        }
      });
    }
  }

  return (
    <tr className={!isShow && "off"}>
      <TableData>
        <input type='checkbox' onChange={toggleDone} checked={isDone} />
      </TableData>
      <TableData>{word.eng}</TableData>
      <TableData>{word.kor}</TableData>
      <TableData>
        <button onClick={toggleShow}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
        <DeleteBtn className='btn_del' onClick={del}>
          삭제
        </DeleteBtn>
      </TableData>
    </tr>
  );
}
