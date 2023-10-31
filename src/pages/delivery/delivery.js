import * as React from "react";
import styles from "./delivery.module.css";
import { ButtonPrimary } from "../../components/Atom/button/button";
import { dataDelivery } from "../../data/data";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Delivery = () => {
  const [detail, setDetail] = React.useState(false);

  const [progress, setProgress] = React.useState("off");

  const toggleProgress = (params) => {
    const off = "off";
    const half = "half";
    const full = "full";

    if (params === "next") {
      if (progress === off) {
        setProgress(half);
      } else if (progress === half) {
        setProgress(full);
      } else {
        setProgress(full);
      }
    } else if (params === "prev") {
      if (progress === full) {
        setProgress(half);
      } else if (progress === half) {
        setProgress(off);
      } else {
        setProgress(off);
      }
    }

    console.log(progress);
  };

  const handleTest = () => {
    setDetail(!detail);
  };

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <h1>Delivery</h1>
        <div className={styles.main}>
          <p>Choose your delivery to shows details</p>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar}>
              <div className={styles.progress} id="progress"></div>

              <div
                className={`${styles.progress_main}  ${
                  (progress === "half" && styles.progress_half) ||
                  (progress === "full" && styles.progress_full)
                }`}
              ></div>

              <div className={`${styles.circle} ${styles.active}`}>
                <WarehouseOutlinedIcon />
              </div>
              <div
                className={`${styles.circle} ${
                  (progress === "half" && styles.active) ||
                  (progress === "full" && styles.active)
                }`}
              >
                <LocalShippingOutlinedIcon />
              </div>
              <div
                className={`${styles.circle} ${
                  progress === "full" && styles.circleActiveLast
                }`}
              >
                <DoneAllOutlinedIcon />
              </div>
            </div>
            <div className={styles.status_delivery}>
              <h1>
                {progress === "off" && "Pesanan sedang diproses"}
                {progress === "half" && "Pesanan sedang diantar"}
                {progress === "full" && "Pesanan sudah sampai tujuan"}
              </h1>
            </div>
            <div className={styles.btn_container}>
              <button
                onClick={() => toggleProgress("prev")}
                className="btn"
                id="prev"
              >
                Prev
              </button>
              <button
                onClick={() => toggleProgress("next")}
                className="btn"
                id="next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.detail} ${
            detail ? styles.detailExpanded : styles.detailShrink
          }`}
        >
          {detail === true && (
            <>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
            </>
          )}
        </div>
        <ButtonPrimary text={"TEST"} onPress={() => handleTest()} />
      </div>

      <div className={styles.filter}></div>

      <div className={styles.table}>
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <>
      {dataDelivery.rows.map((data, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.container_data}>
            <div className={styles.left}>
              <h6>{data.pembeli}</h6>
              <p>{data.no_Do}</p>
            </div>
            <div className={styles.right}>
              <h6>{data.alamat_pengiriman}</h6>
              <p>{data.metode_pengiriman}</p>
              <p>{data.tanggal_pembuatan}</p>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default Delivery;
