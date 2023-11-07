import styles from "./register.module.css";

const Register = () => {
  return (
    <div className={styles.pages}>
      <div className={styles.lt}>
        <h1>REGISTER</h1>
        <label>username</label>
        <input type="text" placeholder="username"/>
      </div>
      <div className={styles.rt}>

      </div>
    </div>
  );
};

export default Register;
