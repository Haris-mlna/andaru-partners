import * as React from "react";
import styles from "./delivery.module.css";

// Material UI
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Delivery = () => {
  const [detail, setDetail] = React.useState(false);

  const [progress, setProgress] = React.useState("off");
  const [dataDetail, setDataDetail] = React.useState();

  const setStatus = (param, data) => {
    const off = "off";
    const half = "half";
    const full = "full";
    const ondelivery = "on delivery";
    const delivered = "delivered";
    setDataDetail(data);

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

  console.log(dataDetail);
  return (
    <div className={styles.pages}>
      <div className={styles.container}>
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
          {dataDetail !== undefined && (
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
                <div className={styles.table_detail_container}>
                  <table className={styles.table_detail}>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Kuantitas 1</th>
                        <th>Kuantitas 2</th>
                        <th>Kuantitas 3</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataDetail.detail_pesanan_produk.map((data, index) => (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{data.kuantitas_1}</td>
                            <td>{data.kuantitas_2}</td>
                            <td>{data.kuantitas_3}</td>
                            <td>
                              {data.kuantitas_1 +
                                data.kuantitas_2 +
                                data.kuantitas_3}
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
        <button className={`${styles.upNdown} ${detail ?  styles.up:  styles.down}`} onClick={() => setDetail(!detail) }>
          <KeyboardDoubleArrowUpIcon />
        </button>
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
              (data.status_pesanan === "on delivery" && styles.yellow) ||
              (data.status_pesanan === "delivered" && styles.green)
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

const dataDelivery = {
  rows: [
    {
      no_Do: "DO/223/33173",
      pembeli: "CAHAYA TEKNINDO MAJU MANDIRI",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "JL RAWA BUAYA OUTER RING ROAD",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "V. Sock AW 6 x 5, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 100,
        },
        {
          product: "V. Sock AW 6 x 5, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 100,
        },
      ],
    },

    {
      no_Do: "DO/223/33164",
      pembeli: "TUNAS WIKARYA PERWITA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "JL KH WAHID HASYIM",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "delivered",
      detail_pesanan_produk: [
        {
          product: "Knie 90 AW 3, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 12,
        },
        {
          product: "Knie 90 AW 3, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 12,
        },
      ],
    },
    {
      no_Do: "DO/223/33083",
      pembeli: "IKAGRIYA DARMAPERSADA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "delivered",
      detail_pesanan_produk: [
        {
          product: "Coupler conduit 20mm, Andaru",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 30,
        },
        {
          product: "Coupler conduit 20mm, Andaru",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 30,
        },
      ],
    },
    {
      no_Do: "DO/223/33129",
      pembeli: "MAJUMAPAN BANGUNINDO",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "delivered",
      detail_pesanan_produk: [
        {
          product: "Pipa PVC D 3, Supramas",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 25,
        },
        {
          product: "Pipa PVC D 3, Supramas",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 25,
        },
      ],
    },
    {
      no_Do: "DO/223/33127",
      pembeli: "SUMBER KARYA SENTOSA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Dop AW 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 20,
        },
        {
          product: "Dop AW 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 20,
        },
      ],
    },
    {
      no_Do: "DO/223/33165",
      pembeli: "INTINUSA TEKNIK SEJAHTERA",
      metode_pengiriman: "Cargo",
      alamat_pengiriman: "Container address 1",
      tanggal_pembuatan: "09 December 2023",
      status_pesanan: "on delivery",
      detail_pesanan_produk: [
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
        {
          product: "Knie 90 D 2, Rucika",
          kuantitas_1: 0,
          kuantitas_2: 0,
          kuantitas_3: 6,
        },
      ],
    },
  ],
};