import { width } from "@mui/system";
import styles from "./login.module.css";
import TextField from "@mui/material/TextField";

const Login = () => {
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
          <form className={styles.form}>
            <TextField
              id="outlined-basic"
              label="Masukan Username"
              variant="outlined"
              size="small"
              className={styles.input}
            />
            <input type="submit" value={'Berikutnya'}/>
          </form>
        </div>
        <div className={styles.rt}>this is image component</div>
      </div>
    </>
  );
};

export default Login;
