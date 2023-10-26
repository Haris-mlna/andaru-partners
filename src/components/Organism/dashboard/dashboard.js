import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
      <div className={styles.head}>
        <h2>Dashboard</h2>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.container_notification}>
            <div className={styles.myorder}>
              <p>Pesanan saya</p>
            </div>
            <div className={styles.delivery}>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  )
}

export default Dashboard;