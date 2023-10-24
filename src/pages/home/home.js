import styles from "./home.module.css";
import Navbar from "../../components/Organism/navbar/navbar.jsx";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Atom/button/button";
import Sidebar from "../../components/Organism/sidebar/sidebar";
import Feed from "../../components/Organism/feed/feed";
import { SidebarContact } from "../../components/Molekul/contact/contact";

const Home = () => {
  const navigate = useNavigate();

  const openDev = () => {
    navigate("/template-dev");
  };

  return (
    <div className={styles.pages}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <Feed />
        <SidebarContact/>
      </div>
      <div className={styles.dev_only}>
        <p>Developer only</p>
        <ButtonPrimary text={"Confirm"} onPress={openDev} />
      </div>
    </div>
  );
};

export default Home;
