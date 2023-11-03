import * as React from "react";
import styles from "./delivery.module.css";

// Import data
import { dataDelivery } from "../../data/data";

// Material UI
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

const Delivery = () => {
  const [detail, setDetail] = React.useState(false);

  const [progress, setProgress] = React.useState("off");
  const [dataDetail, setDataDetail] = React.useState();

  const setStatus = (param, data) => {
    const off = "off";
    const half = "half";
    const full = "full";
    const ondelivery = "OnDelivery";
    const delivered = "Delivered";
    setDataDetail(data);
    setDetail(true);

    if (param === ondelivery) {
      setProgress(half);
    } else if (param === delivered) {
      setProgress(full);
    } else {
      setProgress(off);
    }


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          </div>
        </div>
        {/* <button onClick={() => toggleProgress('next')}>Next</button>
        <button onClick={() => toggleProgress('prev')}>Prev</button> */}
        <div
          className={`${styles.detail} ${
            detail ? styles.detailExpanded : styles.detailShrink
          }`}
        >
          {detail === true && (
            <>
              <div className={styles.detail_container}>
                <div className={styles.nama_pembeli}>
                  <p>nama pembeli</p>
                  <h3>
                    {dataDetail !== undefined && dataDetail.pembeli}
                    {dataDetail === undefined &&
                      "Please pick first to show detail!"}
                  </h3>
                  <p>{dataDetail !== undefined && dataDetail.no_Do}</p>
                </div>
                <div className={styles.detail_pembeli}>
                  <div className={styles.detail_1}>
                    {dataDetail !== undefined && "Alamat Pengiriman :"}
                    <br />
                    {dataDetail !== undefined && "Metode Pengiriman :"}
                    <br />
                    {dataDetail !== undefined && "Tanggal Pembuatan :"}
                  </div>
                  <div className={styles.detail_2}>
                    {dataDetail !== undefined && dataDetail.alamat_pengiriman}
                    <br />
                    {dataDetail !== undefined && dataDetail.metode_pengiriman}
                    <br />
                    {dataDetail !== undefined && dataDetail.tanggal_pembuatan}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <div className={styles.filter}>
        <div>
          <label>Cari nomor DO</label>
          <input/>
        </div>
        <div>
          <label>Cari nama customer</label>
          <input/>
        </div>
      </div> */}

      <div className={styles.table}>
        <Card setStatus={setStatus} />
      </div>
    </div>
  );
};

const Card = ({ setStatus }) => {
  return (
    <>
      {dataDelivery.rows.map((data, index) => (
        <div
          onClick={() => {
            setStatus(data.status_pesanan, data);
          }}
          className={styles.card}
          key={index}
        >
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
          <div
            className={`${styles.status_delivery_card} ${
              (data.status_pesanan === "OnDelivery" && styles.yellow) ||
              (data.status_pesanan === "Delivered" && styles.green)
            }`}
          >
            {data.status_pesanan}
          </div>
        </div>
      ))}
    </>
  );
};

export default Delivery;
