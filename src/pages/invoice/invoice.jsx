import { Button } from "@mui/material";
import Input from "../../components/Atom/input/input";
import styles from "./invoice.module.css";
import InvoiceAdd from "../../components/Organism/table-invoice/table";
import Groupcard from "../../components/Organism/table-invoice/card";
import { useState } from "react";
import { useEffect } from "react";

const Invoice = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
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
        <h2 className={styles.headInvoice}>Faktur</h2>
        <div className={styles.hr}></div>
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
          <Button className={styles.grey} variant="contained">
            Tambah Faktur
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
              new_classname={styles.filter}
            />
            <Input
              id="pembeliinvoice"
              name="pembeliinvoice"
              label="Masukan Nama Pembeli"
              size="small"
              new_classname={styles.filter}
            />
          </div>
          <div className={styles.selectInvoice}></div>
        </div>
        <div>
          {isMobile ? (
            <div>
              {/* Komponen B ditampilkan saat layar ponsel */}
              <Groupcard />
            </div>
          ) : (
            <div>
              {/* Komponen A ditampilkan saat lebar layar normal */}
              <InvoiceAdd />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
