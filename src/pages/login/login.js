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
    <div className={styles_usernames.content}>
      <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Welcome to
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
      <button
        onClick={() => {
          if (username === "admin@pasti") {
            setIsAuthorized(true);
          } else if (username === "haris@pasti") {
            setIsAuthorized(true);
          }
        }}
      >
        Berikutnya
      </button>
      <br />
      <div
        onClick={() => {
          handleRecovery();
        }}
        className={styles_usernames.a}
      >
        lupa password?
      </div>
    </div>
  );
};

const LoginPassword = ({ password, setPassword, username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRecovery = () => {
    navigate("/pass-recovery");
  };

  const handleSubmit = (email, pass) => {
    window.sessionStorage.setItem("login-email", email);
    window.sessionStorage.setItem("login-pass", pass);

    if (email === "admin@pasti") {
      const body = {
        email: email,
        pass: pass,
        username: "Admin Pasti Group",
      };
      dispatch(login(body));
      navigate("/");
    } else if (email === "haris@pasti") {
      const body = {
        email: email,
        pass: pass,
        username: "Haris Maulana",
      };
      dispatch(login(body));
      navigate("/");
    }
  };

  return (
    <form className={styles_password.content}>
      <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Welcome to
      </p>
      <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        Andaru Partner
      </h1>
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
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(username, password);
        }}
      >
        Masuk
      </button>
      <br />
      <div
        onClick={() => {
          handleRecovery();
        }}
        className={styles_password.a}
      >
        lupa password?
      </div>
    </form>
  );
};
