import styles from "./dashboard.module.css";
import {  useState } from "react";

const Dashboard = () => {

  const [myOrder , setMyOrder] = useState(true)
  const [partnerOrder , setPartnerOrder] = useState(false)

  const toggleOrder = (active , nonactive) => {
    active(true);
    nonactive(false)
  }

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.head}>
        <h2>Dashboard</h2>

        <div>
          <button onClick={() => toggleOrder(setMyOrder, setPartnerOrder)} className={`${styles.button_order} ${myOrder ? styles.active : styles.deactive}`}>Pesanan saya</button>
          <button onClick={() => toggleOrder(setPartnerOrder, setMyOrder)} className={`${styles.button_order} ${partnerOrder ? styles.active : styles.deactive}`}>Pesanan Partner</button>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.container_notification}>
            <div className={styles.myorder}>
              <p>Pesanan saya</p>
            </div>
            <div className={styles.delivery}></div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Dashboard;
