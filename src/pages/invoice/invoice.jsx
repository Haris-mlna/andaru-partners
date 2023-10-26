import { Button } from "@mui/material";
import {
  ButtonInvite,
  ButtonPrimary,
} from "../../components/Atom/button/button";
import Input from "../../components/Atom/input/input";
import styles from "./invoice.module.css";

const Invoice = () => {
  return (
    <div className={styles.invoice}>
      <div className={styles.headInvoice}>
        <h2 className={styles.headInvoice}>Faktur</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}>
          <Button className={styles.btnBiruGelap} variant="contained">Tandai Siap</Button>
        </div>
        <div className={styles.btnInvoiceRight}>
        <Button className={styles.btnBiruGelap} variant="contained">Print Faktur</Button>
        <Button className={styles.grey} variant="contained">Tambah Faktur</Button>
        </div>
      </div>
        <div className={styles.filterInfoice}>
            <div className={styles.filterText}>
            <Input id='noinvoice' name='noinvoice' label='Masukan No Invoice' size='small' new_clasname={styles.filter} />
            <Input id='pembeliinvoice' name='pembeliinvoice' label='Masukan Nama Pembeli' size='small' new_clasname={styles.filter} />
            </div>
            <div className={styles.selectInvoice}>

            </div>
        </div>
    </div>
  );
};

export default Invoice;
