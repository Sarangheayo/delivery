/**
 * @file src/App.jsx
 * @description App컴포넌트
 * 251210 v1.0.0 wook 최초 생성
 * 251216 v1.0.1 assistant: Router 구성 + HomePage 렌더
 */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./users/HomePage/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
