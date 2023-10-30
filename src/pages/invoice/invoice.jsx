import { Button } from "@mui/material";
import Input from "../../components/Atom/input/input";
import styles from "./invoice.module.css";
import InvoiceAdd from "../../components/Organism/table-invoice/table";
import Groupcard from "../../components/Organism/table-invoice/card";

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
        <Button className={styles.btnBiruGelap} variant="contained">Import Faktur</Button>
        <Button className={styles.grey} variant="contained">Tambah Faktur</Button>
        </div>
      </div>
      <div className={styles.wrapInvoiceContent}>
        <div className={styles.filterInfoice}>
            <div className={styles.filterText}>
            <Input id='noinvoice' name='noinvoice' label='Masukan No Invoice' size='small' new_classname={styles.filter} />
            <Input id='pembeliinvoice' name='pembeliinvoice' label='Masukan Nama Pembeli' size='small' new_classname={styles.filter} />
            </div>
            <div className={styles.selectInvoice}>
            </div>
        </div>
        {/* <div className={styles.tableInvoice}>
            <InvoiceAdd/>
            
        </div> */}
        </div>
        <Groupcard/>
    </div>
  );
};

export default Invoice;
