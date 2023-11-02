import * as React from "react";
import styles from "./login.module.css";
import TextField from "@mui/material/TextField";

const Login = () => {

    const [username , setUsername] = React.useState('')

  const handleSubmit = (param) => {
    if (param === "admin@pasti") {
      console.log(`you're in`);
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
          <form className={styles.form} onSubmit={(e) => {
            e.preventDefault()  
            handleSubmit(username);
          }}>
            <TextField
              id="outlined-basic"
              label="Masukan Username"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setUsername(e.target.value)
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
