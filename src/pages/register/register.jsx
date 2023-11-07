import * as React from "react";
import styles from "./register.module.css";

const Register = () => {
  const [next, setNext] = React.useState(0);

  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVal, setPasswordVal] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const data = {
    email: email,
    username: username,
    password: password,
    password_val: passwordVal,
    phone: phone,
  };

  const toggleContent = (e, param) => {
    e.preventDefault();
    if (next >= 0 || next < 3) {
      if (param === "next") {
        setNext((prev) => prev + 1);
      } else {
        setNext((prev) => prev - 1);
      }
    }
    console.log(data);
  };

  const handleState = (e, param) => {
    const { value, name } = e.target;
    const input = {
      email: "email",
      username: "username",
      password: "password",
      password_val: "password-val",
      phone: "phone",
    };

    if (name === input.email) {
      setEmail(value);
    } else if (name === input.username) {
      setUsername(value);
    } else if (name === input.password) {
      setPassword(value);
    } else if (name === input.password_val) {
      setPasswordVal(value);
    } else if (name === input.phone) {
      setPhone(value);
    } else {
      console.log("error");
    }
  };

  return (
    <div className={styles.pages}>
      <div className={styles.layer} />
      <h1>Aktivasi Akun</h1>
      <form className={styles.form}>
        <div className={styles.content}>
          {next === 0 && <Email handleState={handleState} />}
          {next === 1 && <Username handleState={handleState} />}
          {next === 2 && <Password handleState={handleState} />}
          {next === 3 && <PhoneNumber handleState={handleState} />}
          {next === 4 && <Avatar />}
        </div>
        <div className={styles.button_container}>
          <div>
            <button
              variant="contained"
              className={`${next === 0 && styles.close}`}
              onClick={(e) => {
                toggleContent(e, "prev");
              }}
            >
              Sebelumnya
            </button>
          </div>
          <div>
            <button
              variant="contained"
              className={`${next === 4 && styles.close}`}
              onClick={(e) => {
                toggleContent(e, "next");
              }}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

const Email = ({ handleState }) => {
  return (
    <>
      <h1>Email</h1>
      <label>Masukan email :</label>
      <input
        type="email"
        name="email"
        placeholder="email@examples.com"
        onChange={(e) => {
          handleState(e, "");
        }}
      />
      <div className={styles.alert}>Email tidak dapat digunakan</div>
    </>
  );
};

const Username = ({ handleState }) => {
  return (
    <>
      <h1>Username</h1>
      <label>Masukan nama pengguna :</label>
      <input
        type="text"
        name="username"
        placeholder="PT Peksi Andaru Sakti"
        onChange={(e) => {
          handleState(e, "");
        }}
      />
      <div className={styles.alert}>Nama tidak dapat digunakan</div>
    </>
  );
};

const Password = ({ handleState }) => {
  return (
    <>
      <h1>Password</h1>
      <label>Masukan kata sandi :</label>
      <input
        type="password"
        name="password"
        placeholder="********"
        onChange={(e) => {
          handleState(e, "");
        }}
      />
      <input
        type="password"
        name="password-val"
        placeholder="********"
        onChange={(e) => {
          handleState(e, "");
        }}
      />
      <div className={styles.alert}>Password tidak dapat digunakan</div>
    </>
  );
};

const PhoneNumber = ({ handleState }) => {
  return (
    <>
      <h1>Phone</h1>
      <label>Masukan Nomor HP :</label>
      <input
        type="text"
        name="phone"
        placeholder="(+62) **** **** ***"
        onChange={(e) => {
          handleState(e, "");
        }}
      />
      <div className={styles.alert}>Nomor telephone tidak dapat digunakan</div>
    </>
  );
};

const Avatar = () => {
  return (
    <>
      <h1>Avatar</h1>
      <label>Masukan Foto Profile :</label>
      <input type="email" placeholder="email@examples.com" />
      <div className={styles.alert}>Email tidak dapat digunakan</div>
    </>
  );
};
