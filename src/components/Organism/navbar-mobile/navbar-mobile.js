import { IconsFA } from "../../Atom/icons/icons";
import { AvatarNavbar } from "../../Atom/image-placeholder/image-placeholder";
import styles from "./navbar-mobile.module.css";

const NavbarMobile = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <button className={`${styles.notification}`}>
            <IconsFA title={"mail"} size={"small"} />
          </button>
        </li>
        <li>
          <button className={`${styles.notification}`}>
            <IconsFA title={"notifications"} size={"small"} />
          </button>
        </li>
        <li>
          <AvatarNavbar new_className={styles.avatar} />
        </li>
      </ul>
    </div>
  );
};

const DropdownAvatar = () => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default NavbarMobile;
