import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  button {
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;
  }
`;

const AppContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<DayList />} />
        <Route path='/day/:day' element={<Day />} />
        <Route path='/create_word' element={<CreateWord />} />
        <Route path='/create_day' element={<CreateDay />} />
        <Route path='*' element={<EmptyPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
