import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Hero/Home";
import Create from "./components/Create/Create";
// import CreateReadme from "./components/CreateReadme"; // Uncomment this when the CreateReadme component is ready

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}
