import * as React from "react";
import styles from "./login.module.css";
import styles_usernames from "./username.module.css";
import styles_password from "./password.module.css";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// SWAL
import Swal from "sweetalert2";

// images
import feed from "../../assets/background/feed.png";
import contact from "../../assets/background/contact.png";
import sidebar from "../../assets/background/sidebar.png";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.pages}>
      <div className={styles.lt}>
        {isAuthorized ? (
          <LoginPassword
            username={username}
            password={password}
            setPassword={setPassword}
            setIsAuthorized={setIsAuthorized}
          />
        ) : (
          <LoginUsername
            username={username}
            setUsername={setUsername}
            setIsAuthorized={setIsAuthorized}
          />
        )}
      </div>
      <div className={styles.rt}>
        <div className={styles.img_container}>
          <img src={feed} alt="feed" className={styles.feed} />
          <img src={sidebar} alt="sidebar" className={styles.sidebar} />
          <img src={contact} alt="contact" className={styles.contact} />
        </div>
      </div>
    </div>
  );
};

export default Login;

const LoginUsername = ({ username, setUsername, setIsAuthorized }) => {
  const navigate = useNavigate();

  const handleRecovery = () => {
    navigate("/pass-recovery");
  };

  return (
    <form
      className={styles_usernames.content}
      onSubmit={(e) => {
        e.preventDefault();
        if (username === "admin@pasti") {
          setIsAuthorized(true);
        } else if (username === "haris@pasti") {
          setIsAuthorized(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username belum terdaftar",
          });
        }
      }}
    >
      <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Selamat datang
      </p>
      <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Andaru Partner
      </h1>
      <label
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="400"
      >
        Login dengan email atau username :{" "}
      </label>
      <br />
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="pasti@examples.com"
      />
      <br />
      <button>Berikutnya</button>
      <br />
      <div
        onClick={() => {
          handleRecovery();
        }}
        className={styles_usernames.forgot_password}
      >
        lupa kata sandi?
      </div>
      <div
        onClick={() => {
          navigate("/register");
        }}
        className={styles_usernames.forgot_password}
      >
        belum punya akun?
      </div>
    </form>
  );
};

const LoginPassword = ({
  password,
  setPassword,
  username,
  setIsAuthorized,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRecovery = () => {
    navigate("/pass-recovery");
  };

  const handleSubmit = (email, pass) => {
    if (
      (email === "admin@pasti" && password === "1234") ||
      (email === "haris@pasti" && password === "1234")
    ) {
      const body = {
        email: email,
        pass: pass,
        username:
          (email === "admin@pasti" && "Admin Pasti Group") ||
          (email === "haris@pasti" && "Haris Maulana"),
        role:
          (email === "admin@pasti" && "admin") ||
          (email === "haris@pasti" && "user"),
      };
      window.sessionStorage.setItem("login-email", email);
      window.sessionStorage.setItem("login-pass", pass);
      dispatch(login(body));
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password salah",
      });
    }
  };

  return (
    <form className={styles_password.content}>
      <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Andaru Partner
      </h1>
      <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Silahkan masukkan password
      </p>
      <label
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="400"
        htmlFor="password"
      >
        Masukan Password :{" "}
      </label>
      <br />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="********"
      />
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(username, password);
        }}
        className={styles_password.login}
      >
        Masuk
      </button>
      <br />
      <button
        onClick={() => {
          setIsAuthorized = false;
        }}
        className={styles_password.back}
      >
        Kembali
      </button>
      <br />
      <div
        onClick={() => {
          handleRecovery();
        }}
        className={styles_password.forgot_password}
      >
        lupa kata sandi?
      </div>
      <div
        onClick={() => {
          navigate("/register");
        }}
        className={styles_usernames.forgot_password}
      >
        belum punya akun?
      </div>
    </form>
  );
};
