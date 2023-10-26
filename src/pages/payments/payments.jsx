import { Button } from "@mui/material";
import Input from "../../components/Atom/input/input";
import styles from "./payments.module.css";
import Payments from "../../components/Organism/table-payments/tablepayments";

const TablePayments = () => {
  return (
    <div className={styles.invoice}>
      <div className={styles.headInvoice}>
        <h2 className={styles.headInvoice}>Payments</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}>
        </div>
        <div className={styles.btnInvoiceRight}>
        <Button className={styles.grey} variant="contained">Tambah Invoice Receipt</Button>
        </div>
      </div>
      <div className={styles.wrapInvoiceContent}>
        <div className={styles.filterInfoice}>
            <div className={styles.filterText}>
            <Input id='noinvoice' name='noinvoice' label='Masukan No Invoice' size='small' new_clasname={styles.filter} />
            <Input id='pembeliinvoice' name='pembeliinvoice' label='Masukan Nama Pembeli' size='small' new_clasname={styles.filter} />
            </div>
            <div className={styles.selectInvoice}>
            </div>
        </div>
        <div className={styles.tableInvoice}>
            <Payments/>
        </div>
        </div>
    </div>
  );
};

export default TablePayments;
