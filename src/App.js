import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Template from "./pages/template/template";
import PassRecovery from "./pages/password-recovery/passwor-recovery";
import Register from "./pages/register/register";

// Redux
import { useDispatch } from "react-redux";
import { login } from "./redux/user";
import { AddInvoice } from "./components/Molekul/table-invoice/card";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const tokeEmail = window.sessionStorage.getItem("login-email");
    const tokenPass = window.sessionStorage.getItem("login-pass");

    if (tokeEmail === "admin@pasti" && tokenPass === "1234") {
      dispatch(
        login({
          email: tokeEmail,
          password: tokenPass,
          username: "Admin Pasti Group",
          role : 'admin'
        })
      );
    } else if (tokeEmail === "haris@pasti" && tokenPass === "1234") {
      dispatch(
        login({
          email: tokeEmail,
          password: tokenPass,
          username: "Haris Maulana",
          role : 'user'
        })
      );
    } else {
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/template-dev" element={<Template />} />
      <Route path="/profile/:email" element={<Profile />} />
      <Route path="/dev-add-invoice" element={<AddInvoice />} />
      <Route path="/pass-recovery" element={<PassRecovery />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
