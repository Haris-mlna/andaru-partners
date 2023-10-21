import styles from './text.module.css'

const ParaNormal = ({text, size, color, weight}) => {
 return (
  <p className={styles.ParaNormal} style={{fontWeight: weight}}>{text}</p>
 )
}

export {
  ParaNormal,
}