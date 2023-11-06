import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Loading from "./components/loading/loading";
import Template from "./pages/template/template"; // Correct import
import Profile from "./pages/profile/profile"; // Correct import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/template-dev" element={<Template />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
