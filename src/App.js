import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/Registration";
import LoginPage from "./components/Login";
import Userpage from "./components/userDetailpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/userDetail" element={<Userpage />} />
    </Routes>
  );
}

export default App;
