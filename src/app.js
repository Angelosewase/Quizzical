import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/introPage";
import QuestionPage from "./pages/QuestionsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App
