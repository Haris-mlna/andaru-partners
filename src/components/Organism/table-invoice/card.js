import styles from './table.module.css'

const Groupcard = () => {
    return(
      <div className={styles.groupCard}>
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
            <h6>tes</h6>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div> 
      </div>
    )
  }

  export default Groupcard