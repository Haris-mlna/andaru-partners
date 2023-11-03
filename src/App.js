import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Template from "./pages/template/template";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";

// Redux
import { useDispatch } from "react-redux";
import { login } from "./redux/user";
import { AddInvoice } from "./components/Molekul/table-invoice/card";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.sessionStorage.getItem("login_token") == null) {
      const userData = window.sessionStorage.getItem("login_token");

      if (userData === "admin@pasti") {
        dispatch({
          name: "Admin Pasti Group",
          age: 0,
          email: "admin@pasti",
        });
      } else if (userData === "haris@pasti") {
        dispatch(
          login({
            name: "Haris Maulana",
            age: 23,
            email: "haris@pasti",
          })
        );
      } else {
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/template-dev" element={<Template />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fff" element={<AddInvoice/>} />
    </Routes>
  );
}

export default App;
