import { group } from "../../../data/data";
import { CardGroup } from "../../Molekul/card/card";
import styles from "./group.module.css";
import { Button } from "@mui/material";

const GroupGrid = () => {
  return (
    <div className={styles.grid}>
      {group.map((x) => (
        <CardGroup name={x.name} member={x.member} />
      ))}
    </div>
  );
};

const GroupContainer = () => {
  return (
    <div className={styles.groupContainer}>
      <div className={styles.headInvoice}>
        <h2 className={styles.headInvoice}>Group</h2>
        <div className={styles.hr}></div>
        <div className={styles.wrapHeadgroup}>
          <div className={styles.btnHeadGroup}>
            <Button className={styles.btnBiruGelap} variant="contained">
              Import Payments
            </Button>
            <Button className={styles.grey} variant="contained">
              Tambah Payments
            </Button>
          </div>
        </div>
        <div className={styles.cardHeadGroup}>
          <div className={styles.cardActiveDataGroup}>
            <p className={styles.pCard}>Menunggu Konfirmasi Partnership :</p>
            <br />
            <div className={styles.nilaiCard}>10</div>
          </div>
          <div className={styles.cardDataGroup}>
            <p className={styles.pCard}>Permintaan Partners :</p>
            <br />
            <div className={styles.nilaiCard}>25</div>
          </div>
          <div className={styles.cardDataGroup}>
            <p className={styles.pCard}>Undangan Partnership : </p>
            <br />
            <div className={styles.nilaiCard}>84</div>
          </div>
        </div>
        <div className={styles.detailCardGroup}>
          <div className={styles.listDetailGroup}>
            <div className={styles.wrapListActive}>
              <div className={styles.listActive}></div>
              <div className={styles.listDeActive}></div>
              <div className={styles.listDeActive}></div>
            </div>
            test
          </div>
        </div>
      </div>

      <GroupGrid />
    </div>
  );
};

export { GroupContainer, GroupGrid };
