import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero/Home";
// import CreateReadme from "./components/CreateReadme"; // Uncomment this when the CreateReadme component is ready

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/create-readme" element={<CreateReadme />} /> */}
      </Routes>
    </Router>
  );
}
