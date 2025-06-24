import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React, { useState, useRef } from "react";
import styled from "styled-components";

const InputArea = styled.div`
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const InputBox = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
`;

const InputSelect = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
`;

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <InputArea>
        <InputLabel>Eng</InputLabel>
        <InputBox type='text' placeholder='computer' ref={engRef} />
      </InputArea>
      <InputArea>
        <InputLabel>Kor</InputLabel>
        <InputBox type='text' placeholder='컴퓨터' ref={korRef} />
      </InputArea>
      <InputArea>
        <InputLabel>Day</InputLabel>
        <InputSelect ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </InputSelect>
      </InputArea>
      <button style={{ opacity: isLoading ? 0.3 : 1 }}>
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
