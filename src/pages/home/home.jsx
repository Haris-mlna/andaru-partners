import * as React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

// Atom --------------------------------------------------------------------
import { ButtonPrimary } from "../../components/Atom/button/button.jsx";

// Organism ----------------------------------------------------------------
import { ResponsiveButton } from "../../components/Organism/responsive-button/responsive-button.jsx";
import { GroupContainer } from "../../components/Organism/group/group.jsx";
import { SidebarContact } from "../../components/Organism/contact/contact.jsx";
import Navbar from "../../components/Organism/navbar/navbar.jsx";
import NavbarMobile from "../../components/Organism/navbar-mobile/navbar-mobile.jsx";
import Sidebar from "../../components/Organism/sidebar/sidebar.jsx";
import Feed from "../../components/Organism/feed/feed.jsx";
import Loading from "../../components/loading/loading.jsx";
import Footer from "../../components/Organism/footer/footer.jsx";

// Redux

// Pages -------------------------------------------------------------------
const Dashboard = React.lazy(() => import("../dashboard/dashboard.jsx"));
const Invoice = React.lazy(() => import("../invoice/invoice.jsx"));
const Payments = React.lazy(() => import("../payments/payments.jsx"));
const Settings = React.lazy(() => import("../settings/settings.js"));
const Delivery = React.lazy(() => import("../delivery/delivery.jsx"));

const Home = () => {
  const [changeMain, setChangeMain] = React.useState(0);

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const [contactIsOpen, setContactIsOpen] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const adminEmail = window.sessionStorage.getItem("login-email");
    const adminPass = window.sessionStorage.getItem("login-pass");

    if (
      (adminEmail === "admin@pasti" && adminPass === "1234") ||
      (adminEmail === "haris@pasti" && adminPass === "1234")
    ) {
      console.log("remove this when you are on deployment");
    } else {
      navigate("/login");
    }
  }, [navigate]);

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
          {changeMain === 3 && <Delivery />}
          {changeMain === 4 && <GroupContainer />}
          {changeMain === 5 && <Payments />}
          {changeMain === 6 && <Settings />}
        </React.Suspense>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
