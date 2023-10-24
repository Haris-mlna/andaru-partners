import styles from "./navbar.module.css";
import { useState } from "react";
import logo from "../../../assets/images/business-partner-logo1.png";

import SearchIcon from "@mui/icons-material/Search";
import { IconsFA } from "../../Atom/icons/icons";
import { AvatarNavbar } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, H6tag, Ptag16 } from "../../Atom/text/text";
import { ButtonView } from "../../Atom/button/button";

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

const DropdownAvatar = ({ isActive }) => {
  return (
    <>
      <div
        className={`${styles.dropdown_avatar} ${isActive ? styles.active : styles.passive}`}
      >
        <div className={styles.dropdown_avatar_info_container}>
          <div className={styles.dropdown_avatar_image_container}>
            <AvatarNavbar new_className={styles.dropdown_image} />
          </div>
          <div className={styles.dropdown_avatar_info}>
            <H6tag text={"Lori Ferguson"} new_className={styles.h6tag_dropdown} />
            <Ptag16 text={"Web Developer"} new_className={styles.p16tag_dropdown} />
          </div>
        </div>
        <ButtonView new_className={styles.button_view} text={"View Profile"} />
        <div className={styles.dropdown_link}>
          <IconsFA size={"small"} title={"settings"} new_className={styles.link_icons} />
          <Atag181 text={"Settings & Privacy"} new_className={styles.link_text} />
        </div>
        <hr className={styles.hr_dr_link} />
        <div className={styles.dropdown_link}>
          <IconsFA size={"small"} title={"power_settings_new"} new_className={styles.link_icons} />
          <Atag181 text={"Sign Out"} new_className={styles.link_text} />
        </div>
      </div>
    </>
  );
};

const DropdownMail = () => {
  return <></>;
};

const DropdownNotification = () => {
  return <></>;
};

export { DropdownAvatar, DropdownMail, DropdownNotification };

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  

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
                <IconsFA
                  className={styles.icon_navigate}
                  title={"home"}
                  size={"large"}
                  new_className={styles.icons_navigate}
                />
              </a>
            </li>
            <li>
              <a href="/">
                <IconsFA
                  className={styles.icon_navigate}
                  title={"feed"}
                  size={"large"}
                  new_className={styles.icons_navigate}
                />
              </a>
            </li>
            <li>
              <a href="/">
                <IconsFA
                  className={styles.icon_navigate}
                  title={"group"}
                  size={"large"}
                  new_className={styles.icons_navigate}
                />
              </a>
            </li>
            <li>
              <a href="/">
                <IconsFA
                  className={styles.icon_navigate}
                  title={"smart_display"}
                  size={"large"}
                  new_className={styles.icons_navigate}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.rt}>
          <div>
            <button className={styles.notifications}>
              <IconsFA
                title={"mail"}
                new_className={styles.icons_notifications}
                size={"small"}
              />
            </button>
          </div>
          <div>
            <button className={styles.notifications}>
              <IconsFA
                title={"notifications"}
                new_className={styles.icons_notifications}
                size={"small"}
              />
            </button>
          </div>
          <div className={styles.container_user}>
            <button
              className={styles.avatar_button}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <AvatarNavbar new_className={styles.avatar} />
            </button>
           <DropdownAvatar isActive={isActive} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
