import styles from './loading.module.css'
import { HashLoader } from "react-spinners";

const Loading = () => {

  const color = "#173563";
  const loading = true;

  return (
    <div className={styles.pages}>
      <HashLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
