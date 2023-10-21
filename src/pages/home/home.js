import Navbar from "../../components/navbar/navbar.jsx";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.pages}>
      <Navbar />
      <div className={styles.content}></div>
    </div>
  );
};

export default Home;
