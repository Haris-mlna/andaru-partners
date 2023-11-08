import * as React from "react";
import styles from "./invoice.module.css";

// Atom
import Input from "../../components/Atom/input/input";

// Molekul
import InvoiceAdd from "../../components/Molekul/table-invoice/table";
// import Groupcard from "../../components/Molekul/table-invoice/card";

// Material UI
import { Button } from "@mui/material";
import { AddInvoice } from "../../components/Molekul/table-invoice/card";

const Invoice = () => {
  // const [isMobile, setIsMobile] = React.useState(false);
  // React.useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth <= 762);
  //   }

  //   // Tambahkan event listener untuk mendeteksi perubahan lebar layar
  //   window.addEventListener("resize", handleResize);

  //   // Panggil handleResize saat komponen pertama kali dimuat
  //   handleResize();

  //   // Hapus event listener saat komponen dibongkar
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const [isInvoice, setIsInvoice] = React.useState(0);

  const handleInvoice = (page) => {
    setIsInvoice(page);
  };
  return (
    <div className={styles.invoice}>
      <div className={styles.headInvoice}>
      </div>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}>
          <Button className={styles.btnBiruGelap} variant="contained">
            Tandai Siap
          </Button>
        </div>
        <div className={styles.btnInvoiceRight}>
          <Button className={styles.btnBiruGelap} variant="contained">
            Import Faktur
          </Button>
          <Button
            className={styles.grey}
            variant="contained"
            onClick={() => handleInvoice(1)}
          >
            Tambah Invoice
          </Button>
        </div>
      </div>
      {isInvoice === 0 && (
        <div className={styles.wrapInvoiceContent}>
          <div className={styles.filterInfoice}>
            <div className={styles.filterText}>
              <Input
                id="noinvoice"
                name="noinvoice"
                label="Masukan No Invoice"
                size="small"
              />
              <Input
                id="pembeliinvoice"
                name="pembeliinvoice"
                label="Masukan Nama Pembeli"
                size="small"
              />
            </div>
            <div className={styles.selectInvoice}></div>
          </div>

          <div>
            <InvoiceAdd />
          </div>
        </div>
      )}
      {isInvoice === 1 && (
        <div className={styles.addInvoice}>
          <AddInvoice />
          <button onClick={()=>{handleInvoice(0)}}>tombol dev</button>
        </div>
      )}
    </div>
  );
};

export default Invoice;
