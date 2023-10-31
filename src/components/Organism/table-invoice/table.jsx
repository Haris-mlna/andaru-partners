import styles from "./table.module.css";

const InvoiceAdd = () => {
  return (
    <div className={styles.invoiceAdd}>
      <div className={styles.wrap}>
        <div className={styles.data}>
          <div className={styles.fill}>
            <h6 className={styles.row}>No Invoice</h6>
            <p className={styles.col}>11111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Pembeli</h6>
            <p className={styles.col}>111111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Tanggal Invoice</h6>
            <p className={styles.col}>1111111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Alamat Penagih</h6>
            <p className={styles.col}>11111111</p>
          </div>

          <div className={styles.fill}>
            <h6 className={styles.row}>Status Pesanan</h6>
            <p className={styles.col}>1111111111</p>
          </div>
        </div>
      
          <div className={styles.history}>
            <div className={styles.historySect}>Detail Pesanan</div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Produk</h6>
                <p className={styles.col}>1111111111</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Kuantitas 1</h6>
                <p className={styles.col}>1111111111</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Kuantitas 2</h6>
                <p className={styles.col}>1111111111</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Kuantitas 3</h6>
                <p className={styles.col}>1111111111</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Total</h6>
                <p className={styles.col}>1111111111</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default InvoiceAdd;
