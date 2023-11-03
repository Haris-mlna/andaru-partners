import styles from '../table-invoice/table.module.css'

const InvoiceReceiptcard = () => {
    return(
      <div className={styles.groupCard}>
        <div className={styles.wrap}>
          <div className={styles.data}>
            <div className={styles.fill}>
                <h6 className={styles.row}>No Receipt</h6>
                <p className={styles.col}>11111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Pembeli</h6>
                <p className={styles.col}>111111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Penerima</h6>
                <p className={styles.col}>1111111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Tangal Invoice Receipt</h6>
                <p className={styles.col}>11111111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Alamat</h6>
                <p className={styles.col}>1111111111</p>
            </div>

            <div className={styles.fill}>
                <h6 className={styles.row}>Status</h6>
                <p className={styles.col}>1111111111</p>
            </div>
            
          </div>
          <hr/>
          <div className={styles.history}>
            <div className={styles.historySect}>Daftar Invoice</div>
             <div className={styles.fill}>
                <h6 className={styles.row}>No Invoice</h6>
                <p className={styles.col}>1111111111</p>
            </div>
             <div className={styles.fill}>
                <h6 className={styles.row}>Notes</h6>
                <p className={styles.col}>1111111111</p>
            </div>
          </div>
        </div> 
      </div>
    )
  }

  export default InvoiceReceiptcard