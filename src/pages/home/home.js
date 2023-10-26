import styles from "./home.module.css";
import { useState } from "react";

// Components
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Atom/button/button";
import { SidebarContact } from "../../components/Molekul/contact/contact";
import Navbar from "../../components/Organism/navbar/navbar.jsx";
import Sidebar from "../../components/Organism/sidebar/sidebar";
import Feed from "../../components/Organism/feed/feed";
import NavbarMobile from "../../components/Organism/navbar-mobile/navbar-mobile";
import {ResponsiveButton} from "../../components/Organism/responsive-button/responsive-button";
import { GroupContainer } from "../../components/Organism/group/group";
import Dashboard from "../../components/Organism/dashboard/dashboard";
import Invoice from "../invoice/invoice";
import InvoiceReceiptPage from "../invoice-receipt/invoiceReceipt";
import Payments from "../payments/payments";


const Home = () => {

  const [changeMain, setChangeMain] = useState(0);


  const navigate = useNavigate();
  
  const openDev = () => {
    navigate("/template-dev");
  };

  return (
    <div className={styles.pages}>
      <Navbar />
      <NavbarMobile/>
      <ResponsiveButton/>
      <div className={styles.content}>
        <Sidebar changeMain={changeMain} setChangeMain={setChangeMain} />
        <Dashboard/>
        {/* <MainComponents changeMain={changeMain}/> */}
        {/* <Feed/> */}
        {/* <SidebarContact/> */}

      </div>
      <div className={styles.content}>
        <Sidebar changeMain={changeMain} setChangeMain={setChangeMain} />
        <Invoice/>
        {/* <MainComponents changeMain={changeMain}/> */}
        {/* <Feed/> */}
        {/* <SidebarContact/> */}

      </div>
      <div className={styles.content}>
        <Sidebar changeMain={changeMain} setChangeMain={setChangeMain} />
        <InvoiceReceiptPage/>
        {/* <MainComponents changeMain={changeMain}/> */}
        {/* <Feed/> */}
        {/* <SidebarContact/> */}

      </div>
      <div className={styles.content}>
        <Sidebar changeMain={changeMain} setChangeMain={setChangeMain} />
        <Payments/>
        {/* <MainComponents changeMain={changeMain}/> */}
        {/* <Feed/> */}
        {/* <SidebarContact/> */}

      </div>
      <div className={styles.dev_only}>
        <p>Developer only</p>
        <ButtonPrimary text={"Confirm"} onPress={openDev} />
      </div>
    </div>
  );
};

const MainComponents = ({changeMain}) => {
  return (
    <>
    {changeMain === 0 &&  '' }
    {changeMain === 5 && <GroupContainer/>}
    </>
  )
}

export default Home;
