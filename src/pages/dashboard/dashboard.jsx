import * as React from "react";
import styles from "./dashboard.module.css";

// img
import logoPASTI from "../../assets/background/logo-pasti.png";
import logoHARIS from "../../assets/images/harispp.png";

// background card
import deliveryImg from "../../assets/background/delivery.png";
import boxImg from "../../assets/background/box.png";
import timeImg from "../../assets/background/time.png";

//Redux
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);

  const [isActive, setIsActive] = React.useState(false);

  const adminBIO =
    "PASTI GROUP is a trusted name in the world of pipes and industrial equipment. With a strong commitment to quality and reliability, we specialize in distributing a wide range of pipes, fittings, and accessories for industrial, construction, and plumbing needs. Our extensive experience and dedication to customer satisfaction make us the preferred choice for businesses across various industries.";
  const harisBIO =
    "Hey there! I'm Haris, a coding enthusiast from New York. I'm all about exploring new tech and building cool stuff. When I'm not coding, you'll find me hiking or diving into AI experiments. Let's connect and create amazing things!";

  const toggleActive = (param) => {
    setIsActive(param);
  };

  return (
    <div className={styles.pages}>
      <div className={styles.lt}>
        <div className={styles.cd_top}>
          <div className={`${styles.top_lt}`}>
            <h1>Dashboard</h1>
          </div>
          <div className={`${styles.top_rt} ${styles.card}`}>
            <p>pesanan dalam pengiriman :</p>
            <h2>6</h2>
            <img
              src={deliveryImg}
              className={`${styles.bg_card} ${styles.bg_delivery}`}
              alt="delivery"
            />
          </div>
        </div>
        <div className={styles.cd_bot}>
          <div className={`${styles.bot_lt} ${styles.card}`}>
            <p>sisa pesanan saya :</p>
            <h2>8</h2>
            <img
              src={boxImg}
              className={`${styles.bg_card} ${styles.bg_box}`}
              alt="box"
            />
          </div>
          <div className={`${styles.bot_rt} ${styles.card}`}>
            <p>pesanan untuk dikonfirmasi :</p>
            <h2>16</h2>
            <img
              src={timeImg}
              className={`${styles.bg_card} ${styles.bg_time}`}
              alt="time"
            />
          </div>
        </div>
        <div className={styles.list_order}>
          <div className={styles.filter_container}>
            <div className={styles.lt_filter}>
              <form
                className={styles.filter}
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="search..."
                  className={styles.input_filter}
                />
                <input type="submit" />
              </form>
            </div>
            <div className={styles.rt_filter}>
              <button
                className={`${styles.toggle_switch} ${
                  isActive ? styles.pasive : styles.active
                }`}
                onClick={() => toggleActive(false)}
              >
                pesanan saya
              </button>
              <button
                className={`${styles.toggle_switch} ${
                  isActive ? styles.active : styles.pasive
                }`}
                onClick={() => toggleActive(true)}
              >
                pesanan partner
              </button>
            </div>
          </div>
          <div className={styles.tabs_container}>
            <p>list pesanan saya :</p>
          </div>
        </div>
      </div>
      <div className={styles.rt}>
        <div className={styles.user_container}>
          <div className={styles.user}>
            <div className={styles.user_avatar}>
              <img
                src={
                  (user.email === "admin@pasti" && logoPASTI) ||
                  (user.email === "haris@pasti" && logoHARIS)
                }
                alt="user"
                className={`${styles.avatar} ${
                  user.email === "haris@pasti" ? user.rounded : ""
                }`}
              />
            </div>
            <div className={styles.user_info}>
              <h6>{user.username}</h6>
              <p>{user.email}</p>
              <span>Active</span>
            </div>
          </div>
          <div className={styles.bio_container}>
            <div>
              <button>Ganti </button>
            </div>
            <p>
              {user.email === "haris@pasti" && harisBIO}{" "}
              {user.email === "admin@pasti" && adminBIO}
            </p>
          </div>
        </div>
        <div className={styles.history_order}>
          <p className={styles.history_title}>riwayat pembayaran :</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
