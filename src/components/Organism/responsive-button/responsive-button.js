import { IconsFA } from '../../Atom/icons/icons';
import styles from './responsive-button.module.css'

const ResponsiveButton = () => {

  const handleOpen = (component) => {
    document.querySelector(component)
  }

  return (
    <div className={styles.container}>
      <button>
        <IconsFA new_className={styles.icons} title={'tune'} size={'small'}/>
        My Profile
      </button>
      <button>
        My Contact
        <IconsFA new_className={styles.icons} title={'tune'} size={'small'}/>
      </button>
    </div>
  )
}

export default ResponsiveButton;