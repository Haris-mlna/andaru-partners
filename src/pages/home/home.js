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

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const [contactIsOpen, setContactIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const openDev = () => {
    navigate("/template-dev");
  };

  return (
    <div className={styles.pages}>
      <Navbar setChangeMain={setChangeMain} />
      <NavbarMobile />
      <ResponsiveButton
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        contactIsOpen={contactIsOpen}
        setContactIsOpen={setContactIsOpen}
      />
      <div className={styles.content}>
        <Sidebar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
          contactIsOpen={contactIsOpen}
          setContactIsOpen={setContactIsOpen}
          changeMain={changeMain}
          setChangeMain={setChangeMain}
        />
        <React.Suspense fallback={<Loading />}>
          {changeMain === 0 && (
            <>
              <Feed />
              <SidebarContact />
            </>
          )}
          {changeMain === 1 && <Dashboard />}
          {changeMain === 2 && <Invoice />}
          {changeMain === 3 && <InvoiceReceiptPage />}
          {changeMain === 4 && <Delivery />}
          {changeMain === 5 && <GroupContainer />}
          {changeMain === 6 && <Katalog />}
          {changeMain === 7 && <Payments />}
          {changeMain === 8 && <Settings />}
        </React.Suspense>
      </div>
      <div className={styles.dev_only}>
        <p>Developer only</p>
        <ButtonPrimary text={"Confirm"} onPress={openDev} />
      </div>
    </div>
  );
};

export default Home;
