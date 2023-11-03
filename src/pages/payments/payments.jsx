import * as React from "react";
import styles from "./payments.module.css";

// Atom
import Input from "../../components/Atom/input/input";

// Molekul
import Payments from "../../components/Molekul/table-payments/tablepayments";
import Paymentscard from "../../components/Molekul/table-payments/card";

// Material UI
import { Button } from "@mui/material";

const TablePayments = () => {
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
        <h2 className={styles.headInvoice}>Payments</h2>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}></div>
        <div className={styles.btnInvoiceRight}>
          <Button className={styles.btnBiruGelap} variant="contained">
            Import Payments
          </Button>
          <Button className={styles.grey} variant="contained">
            Tambah Payments
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
                <Paymentscard />
              </div>
            ) : (
              <div>
                {/* Komponen A ditampilkan saat lebar layar normal */}
                <Payments />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePayments;
