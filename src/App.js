import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Template from "./pages/template/template"; // Correct import
import Profile from "./pages/profile/profile"; // Correct import
import { AddInvoice } from "./components/Molekul/table-invoice/card";
import PassRecovery from "./pages/password-recovery/passwor-recovery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/template-dev" element={<Template />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dev-add-invoice" element={<AddInvoice />} />
      <Route path="/pass-recovery" element={<PassRecovery />} />
    </Routes>
  );
}

export default App;
