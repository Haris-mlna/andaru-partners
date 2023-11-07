import * as React from "react";
import styles from "./dashboard.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Material UI
import { PieChart } from "@mui/x-charts";

const Dashboard = () => {
  const [myOrder, setMyOrder] = React.useState(true);
  const [partnerOrder, setPartnerOrder] = React.useState(false);

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
              <OpenInNewIcon className={styles.icons_open} />
              <p>Pesanan {partnerOrder ? "partner" : "saya"} :</p>
              <h3>{partnerOrder ? 14 : 4}</h3>
            </div>
            <div className={styles.delivery}>
              <OpenInNewIcon className={styles.icons_open} />
              <p>
                {" "}
                {partnerOrder
                  ? "Pesanan dalam pengiriman :"
                  : "Pesanan sedang dikirim :"}
              </p>
              <h3>{partnerOrder ? 15 : 2}</h3>
            </div>
          </div>
          <div className={styles.confirmation}>
            <OpenInNewIcon className={styles.icons_open} />
            <p>Menunggu konfirmasi pemesanan :</p>
            <h3>{partnerOrder ? 8 : 12}</h3>
          </div>
          <div className={styles.bill}>
            <OpenInNewIcon className={styles.icons_open} />
            <p> {partnerOrder ? "Invoice penjualan saya" : "Tagihan saya :"}</p>
            {partnerOrder ? (
              <div className={styles.chart_container}>
                <PieChart
                  series={[
                    {
                      data: [
                        { value: 4 },
                        { value: 6 },
                        { value: 20 },
                        { value: 20 },
                      ],
                      innerRadius: 30,
                      outerRadius: 100,
                      paddingAngle: 5,
                      cornerRadius: 5,
                      startAngle: -180,
                      endAngle: 180,
                      cx: 200,
                      cy: 120,
                    },
                  ]}
                />
              </div>
            ) : (
              <div className={`table-responsive ${styles.table}`}>
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.list_payment}>
            <p>List Pesanan Saya :</p>
            <div className={`table-responsive ${styles.table}`}>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.history}>
            <p>Riwayat pembayaran :</p>
            <div className={`table-responsive ${styles.table}`}>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
