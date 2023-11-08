import * as React from "react";
import styles from "./invoiceReceipt.module.css";

// Atom
import Input from "../../components/Atom/input/input";

// Molekul
import InvoiceReceipt from "../../components/Molekul/table-invoiceReceipt/tableInvoiceReceipt";
import InvoiceReceiptcard, {
  AddInvoiceRec,
} from "../../components/Molekul/table-invoiceReceipt/card";

// Material UI
import { Button } from "@mui/material";

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

  const [isInvoiceRec, setIsInvoiceRec] = React.useState(0);

  const handleInvoicerec = (page) => {
    setIsInvoiceRec(page);
  };
  return (
    <div className={styles.invoice}>
      <div className={styles.btnInvoice}>
        <div className={styles.btnInvoiceLeft}></div>
        <div className={styles.btnInvoiceRight}>
          <Button
            className={styles.grey}
            variant="contained"
            onClick={() => handleInvoicerec(1)}
          >
            Tambah Invoice Receipt
          </Button>
        </div>
      </div>
      <div className={styles.wrapInvoiceContent}>
        <div className={styles.tableInvoice}>
          {isInvoiceRec === 0 && (
            <div>
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
          )}
          {isInvoiceRec === 1 && (
            <div>
              <AddInvoiceRec />
              <button
                onClick={() => {
                  handleInvoicerec(0);
                }}
              >
                tombol dev
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceReceiptPage;
