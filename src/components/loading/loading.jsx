import styles from "./loading.module.css";
import { HashLoader } from "react-spinners";
import { ClipLoader } from "react-spinners";

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

const LoadingComponents = () => {
  const color = "#173563";
  const loading = true;

  return (
    <div className={styles.pages}>
      <ClipLoader
        color={color}
        loading={loading}
        size={14}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export { LoadingComponents };
