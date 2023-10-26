import styles from "./dashboard.module.css";
import { useState } from "react";

const Dashboard = () => {
  const [myOrder, setMyOrder] = useState(true);
  const [partnerOrder, setPartnerOrder] = useState(false);

  const toggleOrder = (active, nonactive) => {
    active(true);
    nonactive(false);
  };

  return (
    <div className={styles.dashboard_container}>

      <div className={styles.head}>
        <h2>Dashboard</h2>

        <div className={styles.btn_container}>
          <button
            onClick={() => toggleOrder(setMyOrder, setPartnerOrder)}
            className={`${styles.button_order} ${
              myOrder ? styles.active : styles.deactive
            }`}
          >
            Pesanan saya
          </button>
          <button
            onClick={() => toggleOrder(setPartnerOrder, setMyOrder)}
            className={`${styles.button_order} ${
              partnerOrder ? styles.active : styles.deactive
            }`}
          >
            Pesanan Partner
          </button>
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.container_notification}>
            <div className={styles.myorder}>
              <p>Pesanan saya :</p>
              <h3>17</h3>
            </div>
            <div className={styles.delivery}>
              <p>Pesanan sedang dikirim :</p>
              <h3>8</h3>
            </div>
          </div>
          <div className={styles.confirmation}>
            <p>Konfirmasi pemesanan</p>

          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Dashboard;
