import styles from "./dashboard.module.css";

const Dashboard = () => {
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
        <div className={styles.list_order}>

        </div>
      </div>


      <div className={styles.rt}>
        <div className={styles.user_container}>
          
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
