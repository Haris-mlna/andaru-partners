import * as React from "react";
import { Button } from "@mui/material";
import Input from "../../components/Atom/input/input";
import styles from "./invoiceReceipt.module.css";
import InvoiceReceipt from "../../components/Molekul/table-invoiceReceipt/tableInvoiceReceipt";
import InvoiceReceiptcard from "../../components/Molekul/table-invoiceReceipt/card";


const InvoiceReceiptPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 762);
    }

    // Tambahkan event listener untuk mendeteksi perubahan lebar layar
    window.addEventListener("resize", handleResize);

    // Panggil handleResize saat komponen pertama kali dimuat
    handleResize();

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.invoice}>
      <div className={styles.headInvoice}>
        <h2 className={styles.headInvoice}>Invoice Receipt</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}></div>
        <div className={styles.btnInvoiceRight}>
          <Button className={styles.grey} variant="contained">
            Tambah Invoice Receipt
          </Button>
        </div>
      </div>
      <div className={styles.wrapInvoiceContent}>
        <div className={styles.filterInfoice}>
          <div className={styles.filterText}>
            <Input
              id="noinvoice"
              name="noinvoice"
              label="Masukan No Invoice"
              size="small"
              new_clasname={styles.filter}
            />
            <Input
              id="pembeliinvoice"
              name="pembeliinvoice"
              label="Masukan Nama Pembeli"
              size="small"
              new_clasname={styles.filter}
            />
          </div>
          <div className={styles.selectInvoice}></div>
        </div>
        <div className={styles.tableInvoice}>
          <div>
            {isMobile ? (
              <div>
                {/* Komponen B ditampilkan saat layar ponsel */}
                <InvoiceReceiptcard />
              </div>
            ) : (
              <div>
                {/* Komponen A ditampilkan saat lebar layar normal */}
                <InvoiceReceipt />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceReceiptPage;
