import styles from './navbar.module.css'

const SiteLink = ({ className, icon, url }) => {
  return (
    <li>
      <a href={url}>
        <i className={`${className}`}>{icon}</i>
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>

      </nav>
    </div>
  );
};

export default Navbar;
