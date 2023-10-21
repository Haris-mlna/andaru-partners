import { ButtonDanger, ButtonPrimary } from "../../components/button/button.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.pages}>
      <Navbar />
      <div className={styles.content}>
        <ButtonPrimary text={'Confirm'}/>
        <ButtonDanger text={'Delete'}/>
      </div>
    </div>
  );
};

export default Home;
