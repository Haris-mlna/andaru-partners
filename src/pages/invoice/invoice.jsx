import {
  ButtonInvite,
  ButtonPrimary,
} from "../../components/Atom/button/button";
import { H4tag } from "../../components/Atom/text/text";
import styles from "./invoice.module.css";

const Invoice = () => {
  return (
    <div className={styles.invoice}>
      <div className={styles.headInvoice}>
        <H4tag text={"Faktur"} />
        <hr />
      </div>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}>
          <ButtonPrimary text={"Tandai Siap"} />
        </div>
        <div className={styles.btnInvoiceRight}>
          <ButtonPrimary text={"Print Faktur"} />
          <ButtonInvite text={"Tambah Faktur"} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
