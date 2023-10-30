import styles from "./home.module.css";
import { useState } from "react";

// Components
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Atom/button/button";
import Navbar from "../../components/Organism/navbar/navbar.jsx";
import Sidebar from "../../components/Organism/sidebar/sidebar";
import NavbarMobile from "../../components/Organism/navbar-mobile/navbar-mobile";
import { ResponsiveButton } from "../../components/Organism/responsive-button/responsive-button";
import { GroupContainer } from "../../components/Organism/group/group";
import { SidebarContact } from "../../components/Molekul/contact/contact";

// Pages
import Dashboard from "../dashboard/dashboard";
import Invoice from "../invoice/invoice";
import InvoiceReceiptPage from "../invoice-receipt/invoiceReceipt";
import Payments from "../payments/payments";
import Katalog from "../katalog-produk/katalog-produk";
import Settings from "../settings/settings";
import Delivery from "../delivery/delivery";
import Feed from "../../components/Organism/feed/feed";

const Home = () => {
  const [changeMain, setChangeMain] = useState(0);

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
