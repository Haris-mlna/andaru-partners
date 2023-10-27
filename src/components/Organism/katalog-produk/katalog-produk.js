import { product } from '../../../data/data';
import styles from './katalog-produk.module.css'

const Katalog = () => {
  return (
    <div className={styles.katalog_container}>
      {product.map(() => (
        <div>
          
        </div>
      ))}
    </div>
  )
}

export default Katalog;