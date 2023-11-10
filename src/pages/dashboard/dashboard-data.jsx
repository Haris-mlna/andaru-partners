import { dataDelivery } from "../../data/data";
import styles from "./dashboard.module.css";

const Data_pengiriman = () => {
  return (
    <div>
      {dataDelivery.rows.map((data, index) => (
        <div className={styles.delivery} key={index}>
          <div className={styles.container_data}>
            <div className={styles.left_card}>
              <h6>{data.pembeli}</h6>
              <p>{data.no_Do}</p>
            </div>
            <div className={styles.right_card}>
              <h6>{data.alamat_pengiriman}</h6>
              <p>{data.metode_pengiriman}</p>
              <p>{data.tanggal_pembuatan}</p>
            </div>
          </div>
          <div
            className={`${styles.status_delivery_card} ${
              (data.status_pesanan === "on delivery" && styles.yellow) ||
              (data.status_pesanan === "delivered" && styles.green)
            }`}
          >
            {data.status_pesanan}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Data_pengiriman };
