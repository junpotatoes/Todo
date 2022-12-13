import "./App.css";
import MainHeader from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main.jsx";
import Calendar from "./Components/Calendar";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader></MainHeader>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
