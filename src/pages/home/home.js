import * as React from "react";
import styles from "./home.module.css";

// Components
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Atom/button/button";
import { ResponsiveButton } from "../../components/Organism/responsive-button/responsive-button";
import { GroupContainer } from "../../components/Organism/group/group";
import { SidebarContact } from "../../components/Molekul/contact/contact";
import Navbar from "../../components/Organism/navbar/navbar.jsx";
import NavbarMobile from "../../components/Organism/navbar-mobile/navbar-mobile";
import Sidebar from "../../components/Organism/sidebar/sidebar";
import Feed from "../../components/Organism/feed/feed";
import Loading from "../../components/loading/loading";

// Pages
const Dashboard = React.lazy(() => import("../dashboard/dashboard"));
const Invoice = React.lazy(() => import("../invoice/invoice"));
const InvoiceReceiptPage = React.lazy(() =>
  import("../invoice-receipt/invoiceReceipt")
);
const Payments = React.lazy(() => import("../payments/payments"));
const Katalog = React.lazy(() => import("../katalog-produk/katalog-produk"));
const Settings = React.lazy(() => import("../settings/settings"));
const Delivery = React.lazy(() => import("../delivery/delivery"));

const Home = () => {
  const [changeMain, setChangeMain] = React.useState(0);

  const navigate = useNavigate();

  const openDev = () => {
    navigate("/template-dev");
  };

  return (
    <div className={styles.pages}>
      <Navbar />
      <NavbarMobile />
      <ResponsiveButton />
      <div className={styles.content}>
        <Sidebar changeMain={changeMain} setChangeMain={setChangeMain} />
        <React.Suspense fallback={<Loading/>}>
          {changeMain === 0 && (
            <>
              <Feed />
              <SidebarContact />
            </>
          )}
          {changeMain === 1 && <Dashboard />}
          {changeMain === 2 && <Invoice />}
          {changeMain === 3 && <Delivery />}
          {changeMain === 4 && <GroupContainer />}
          {changeMain === 5 && <Katalog />}
          {changeMain === 6 && <Payments />}
          {changeMain === 7 && <Settings />}
        </React.Suspense>
      </div>
      <div className={styles.dev_only}>
        <p>Developer only</p>
        <ButtonPrimary text={"Confirm"} onPress={openDev} />
      </div>
    </div>
  );
};

const MainComponents = ({ changeMain }) => {
  return (
    <>
      {changeMain === 0 && ""}
      {changeMain === 5 && <GroupContainer />}
    </>
  );
};

export default Home;
