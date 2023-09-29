import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/Registration";
import LoginPage from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
