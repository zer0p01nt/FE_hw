import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const DayListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.li`
  flex: 20% 0 0;
  box-sizing: border-box;
  padding: 10px;
`;

const DayButton = styled(Link)`
  display: block;
  padding: 20px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: dodgerblue;
`;

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <DayListContainer>
      {days.map((day) => (
        <List key={day.id}>
          <DayButton to={`/day/${day.day}`}>Day {day.day}</DayButton>
        </List>
      ))}
    </DayListContainer>
  );
}
