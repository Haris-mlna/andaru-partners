import * as React from "react";
import styles from "./delivery.module.css";

const Delivery = () => {
  const [detail, setDetail] = React.useState(false);

  const toggleDetail = () => {
    setDetail(!detail);
  };

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <div className={styles.main}></div>
        <div className={`${styles.detail} ${detail ? styles.detailExpanded : styles.detailShrink}`}>
          {detail === true && (
            <>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
              <p>Test</p>
            </>
          )}
        </div>
        <button onClick={toggleDetail}>CLICK</button>
      </div>

      <div className={styles.table}></div>
    </div>
  );
};

export default Delivery;
