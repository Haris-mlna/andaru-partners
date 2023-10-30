import * as React from "react";
import styles from "./delivery.module.css";

const Delivery = () => {
  const [detail, setDetail] = React.useState(false);

  const [progress, setProgress] = React.useState("off");

  const toggleProgress = (params) => {
    const off = "off";
    const half = "half";
    const full = "full";

    if (params === "next") {
      if (progress === off) {
        setProgress(half);
      } else if (progress === half) {
        setProgress(full);
      } else {
        setProgress(full);
      }
    } else if (params === "prev") {
      if (progress === full) {
        setProgress(half);
      } else if (progress === half) {
        setProgress(off);
      } else {
        setProgress(off);
      }
    }

    console.log(progress);
  };

  return (
    <div className={styles.pages}>
      <div className={styles.container}>
        <h1>Delivery</h1>
        <div className={styles.main}>
          <p>Choose your delivery to shows details</p>
          <div className={styles.progress_container}>
            <div className={styles.progress_bar}>
              <div
                className={`${styles.progress} ${
                  (progress === "half" && styles.progress_half) ||
                  (progress === "full" && styles.progress_full)
                }`}
                id="progress"
              ></div>
              <div className={`${styles.circle} ${styles.active}`}>1</div>
              <div
                className={`${styles.circle} ${
                  (progress === "half" && styles.active) ||
                  (progress === "full" && styles.active)
                }`}
              >
                2
              </div>
              <div
                className={`${styles.circle} ${
                  progress === "full" && styles.active
                }`}
              >
                3
              </div>
            </div>
            <div className={styles.btn_container}>
              <button
                onClick={() => toggleProgress("prev")}
                className="btn"
                id="prev"
              >
                Prev
              </button>
              <button
                onClick={() => toggleProgress("next")}
                className="btn"
                id="next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.detail} ${
            detail ? styles.detailExpanded : styles.detailShrink
          }`}
        >
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
      </div>

      <div className={styles.table}></div>
    </div>
  );
};

export default Delivery;
