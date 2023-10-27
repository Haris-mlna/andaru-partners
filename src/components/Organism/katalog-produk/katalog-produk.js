import { product } from '../../../data/data';
import { CardMarketplace } from '../../Molekul/card/card';
import styles from './katalog-produk.module.css'

const Katalog = () => {
  return (
    <div className={styles.catalog_container}>
      <div className={styles.grid}>
        {product.map((product, index) => (
          <CardMarketplace price={product.price} text={product.name} seller={product.seller} brand={product.brand}/>
        ))}
      </div>
    </div>
    )
}

export default Katalog;