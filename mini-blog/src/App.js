import { Route, Routes } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import { GlobalStyle } from "./component/ui/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/posts/:id' element={<PostViewPage />} />
        <Route path='/write' element={<PostWritePage />} />
      </Routes>
    </div>
  );
}

export default App;
