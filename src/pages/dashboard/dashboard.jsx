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

// Material UI
import AutorenewIcon from "@mui/icons-material/Autorenew";

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);

  const [isActive, setIsActive] = React.useState(false);

  const adminBIO =
    "PASTI GROUP is a trusted name in the world of pipes and industrial equipment. With a strong commitment to quality and reliability, we specialize in distributing a wide range of pipes, fittings, and accessories for industrial, construction, and plumbing needs. Our extensive experience and dedication to customer satisfaction make us the preferred choice for businesses across various industries.";
  const harisBIO =
    "Hey there! I'm Haris, a coding enthusiast from New York. I'm all about exploring new tech and building cool stuff. When I'm not coding, you'll find me hiking or diving into AI experiments. Let's connect and create amazing things!";

  return (
    <div className={styles.pages}>
      {/*  */}
      {/* LEFT SECTION */}
      {/*  */}

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
            <h2>7</h2>
            <img
              src={boxImg}
              className={`${styles.bg_card} ${styles.bg_box}`}
              alt="box"
            />
          </div>
          <div className={`${styles.bot_rt} ${styles.card}`}>
            <p>pesanan untuk dikonfirmasi :</p>
            <h2>2</h2>
            <img
              src={timeImg}
              className={`${styles.bg_card} ${styles.bg_time}`}
              alt="time"
            />
          </div>
        </div>

        <div className={styles.history_order}>
          <div className={styles.tabs_container}>
            <p>riwayat pembayaran :</p>
          </div>
        </div>
      </div>

      {/*  */}
      {/* RIGHT SECTION */}
      {/*  */}

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
                isActive ? styles.active : ""
              }`}
              onClick={() => setIsActive(!isActive)}
            >
              <AutorenewIcon className={styles.icon} />{" "}
              {isActive ? "Pesanan Saya" : "Pesanan Partner"}
            </button>
          </div>
        </div>
        <div className={styles.order_list}>
          <p className={styles.order_title}>list pesanan saya :</p>
          <div>
            {data_order.map((data, index) => (
              <div className={styles.card_order} key={index}>
                <div className={styles.card_no}>{data.order_number}</div>
                <div className={styles.card_cust}>{data.customer}</div>
                <div className={styles.card_status}>
                  <p>{data.payment_method}</p>
                  <div
                    className={`${styles.status} 
                    ${data.status === "Active" && styles.active_order}
                    ${data.status === "InProgress" && styles.progress_order}
                    ${data.status === "WaitConfirmation" && styles.wait_order}
                    ${data.status === "Done" && styles.done}
                    `}
                  >
                    {data.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const data_order = [
  {
    order_number: "SO\\2023\\X\\0001",
    customer: "Jaladara",
    payment_method: "Cash",
    status: "InProgress",
  },
  {
    order_number: "DO\\2023\\IX\\0002",
    customer: "Jaladara",
    payment_method: "After Delivery",
    status: "InProgress",
  },
  {
    order_number: "DO\\2023\\IX\\0001",
    customer: "Jaladara",
    payment_method: "After Delivery",
    status: "WaitConfirmation",
  },
  {
    order_number: "PAS/23/28735",
    customer: "PILAR GARBA INTI",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28579",
    customer: "PARAMA DHARMA",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28216",
    customer: "JAGAT KONSTRUKSI ABDIPERSADA",
    payment_method: "After Delivery",
    status: "Done",
  },
  {
    order_number: "PAS/23/28575",
    customer: "SINAR ARTA MULIA",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28738",
    customer: "PILAR GARBA INTI",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28690",
    customer: "CITRASEJATI PRIMALESTARI",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28736",
    customer: "PILAR GARBA INTI",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28740",
    customer: "CAHAYA TEKNINDO MAJU MANDIRI",
    payment_method: "After Delivery",
    status: "Active",
  },
  {
    order_number: "PAS/23/28396",
    customer: "CAHAYA TEKNINDO MAJU MANDIRI",
    payment_method: "After Delivery",
    status: "InProgress",
  },
];
