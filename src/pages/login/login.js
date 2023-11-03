import * as React from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/user";

// Material UI
import TextField from "@mui/material/TextField";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");

  const handleSubmit = (param) => {
    if (param === "admin@pasti") {
    } else if (param === "haris@pasti") {
      dispatch(
        login({
          name: "Haris Maulana",
          age: 23,
          email: "haris@pasti",
        })
      );
      navigate("/");
    } else {
      console.log(`you're out`);
    }
  };

  return (
    <>
      <div className={styles.pages}>
        <div className={styles.lt}>
          <div className={styles.title_container}>
            <span>Welcome to</span>
            <h1 className={styles.title}>
              Andaru
              <br />
              Partner
            </h1>
          </div>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(username);
            }}
          >
            <TextField
              id="outlined-basic"
              label="Masukan Username"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={styles.input}
            />
            <input type="submit" value={"Berikutnya"} />
          </form>
        </div>
        <div className={styles.rt}>this is image component</div>
      </div>
    </>
  );
};

export default Login;
