import { ButtonDanger, ButtonPrimary, ButtonView } from "../../components/Atom/button/button.jsx";
import IconsFA from "../../components/Atom/icons/icons.jsx";
import Navbar from "../../components/Molekul/navbar/navbar.jsx";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.pages}>
      <Navbar />
      <div className={styles.content}>
        <ButtonPrimary text={'Confirm'}/>
        <ButtonDanger text={'Delete'}/>
        <ButtonView text={'View Profile'}/>
        <IconsFA title={'home'}/>
        <IconsFA title={'feed'}/>
      </div>
    </div>
  );
};

export default Home;
