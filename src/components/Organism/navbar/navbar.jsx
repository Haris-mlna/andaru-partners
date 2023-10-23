import styles from "./navbar.module.css";
import logo from "../../../assets/images/business-partner-logo1.png";

import SearchIcon from "@mui/icons-material/Search";
import { IconsFA } from "../../Atom/icons/icons";
import { AvatarNavbar } from "../../Atom/image-placeholder/image-placeholder";

const SearchBar = () => {
  return (
    <>
      <form className={styles.searchbar_container}>
        <SearchIcon color="action" />
        <input
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search..."
        />
      </form>
    </>
  );
};

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.lt}>
          <img src={logo} alt="logo" />
          <SearchBar />
        </div>
        <div className={styles.md}>
          <ul>
            <li>
              <a href="/">
                <IconsFA className={styles.icon_navigate} title={"home"} size={'large'} new_className={styles.icons_navigate}/>
              </a>
            </li>
            <li>
              <a href="/">
                <IconsFA className={styles.icon_navigate} title={"feed"} size={'large'}  new_className={styles.icons_navigate}/>
              </a>
            </li>
            <li>
              <a href="/">
                <IconsFA className={styles.icon_navigate} title={"group"} size={'large'} new_className={styles.icons_navigate} />
              </a>
            </li>
            <li>
              <a href="/">
                <IconsFA className={styles.icon_navigate} title={"smart_display"} size={'large'} new_className={styles.icons_navigate} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.rt}>
          <button className={styles.notifications}>
            <IconsFA title={'mail'} new_className={styles.icons_notifications} size={'small'}/>
          </button>
          <button className={styles.notifications}>
            <IconsFA title={'notifications'} new_className={styles.icons_notifications} size={'small'}/>
          </button>
          <button className={styles.avatar_button}>
          <AvatarNavbar new_className={styles.avatar}/>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
