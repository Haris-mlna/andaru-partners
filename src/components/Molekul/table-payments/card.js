import styles from '../table-invoice/table.module.css'

const Paymentscard = () => {
    return(
      <div className={styles.groupCard}>
        <div className={styles.wrap}>
          <div className={styles.data}>
            <div className={styles.fill}>
                <h6 className={styles.row}>No Ref</h6>
                <p className={styles.col}>11111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Pembeli</h6>
                <p className={styles.col}>111111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Tanggal Pembayaran</h6>
                <p className={styles.col}>1111111</p>
            </div>
            
            <div className={styles.fill}>
                <h6 className={styles.row}>Nominal Bayar</h6>
                <p className={styles.col}>11111111</p>
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
                <h6 className={styles.row}>Invoice Amount</h6>
                <p className={styles.col}>1111111111</p>
            </div>
            
          </div>
        </div> 
      </div>
    )
  }

  export default Paymentscard