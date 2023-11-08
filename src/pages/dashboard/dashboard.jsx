import * as React from "react";
import styles from "./dashboard.module.css";

//Redux
import { useSelector } from "react-redux";

// Material UI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className={styles.pages}>
      <div className={styles.lt}>
        <div className={styles.cd_top}>
          <div className={styles.top_lt}>
            <h1>Dashboard</h1>
          </div>
          <div className={styles.top_rt}></div>
        </div>
        <div className={styles.cd_bot}>
          <div className={styles.bot_lt}></div>
          <div className={styles.bot_rt}></div>
        </div>
        <div className={styles.list_order}></div>
      </div>
      <div className={styles.rt}>
        <div className={styles.user_container}>
          <div className={styles.user}>
            <div className={styles.user_avatar}>
              <AccountCircleIcon className={styles.avatar} />
            </div>
            <div className={styles.user_info}>
              <h6>{user.username}</h6>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <div className={styles.history_order}>
          <p>riwayat pembayaran</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
