import { useState } from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

import harisImg from "../../../assets/images/harispp.png";
import pastiImg from "../../../assets/background/logo-pasti.png";

// Components
import logo from "../../../assets/images/business-partner-logo1.png";
import { IconsFA } from "../../Atom/icons/icons";
import { Atag181, H6tag, Ptag16 } from "../../Atom/text/text";
import { ButtonView } from "../../Atom/button/button";

// Material UI
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

// Redux
import { useSelector } from "react-redux";

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

const DropdownAvatar = ({ isActive, isInitial }) => {
  const user = useSelector((state) => state.user.value);

  const navigate = useNavigate();

  const NavigateTo = () => {
    return navigate(`/profile/${user.email}`);
  };

  const signOut = () => {
    window.sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div
        className={`${styles.dropdown_avatar} ${
          isInitial
            ? isActive
              ? styles.active
              : ""
            : isActive
            ? styles.active
            : styles.passive
        } ${isInitial ? "" : styles.initial}`}
      >
        <div className={styles.dropdown_avatar_info_container}>
          <div className={styles.dropdown_avatar_image_container}>
            <img alt="avatar" src={user.role === 'admin' ? pastiImg : harisImg} className={styles.dropdown_image} />
          </div>
          <div className={styles.dropdown_avatar_info}>
            <H6tag
              text={"Lori Ferguson"}
              new_className={styles.h6tag_dropdown}
            />
            <Ptag16
              text={"Web Developer"}
              new_className={styles.p16tag_dropdown}
            />
          </div>
        </div>
        <ButtonView
          new_className={styles.button_view}
          text={"View Profile"}
          onPress={NavigateTo}
        />
        <div className={styles.dropdown_link}>
          <IconsFA
            size={"small"}
            title={"settings"}
            new_className={styles.link_icons}
          />
          <Atag181
            text={"Settings & Privacy"}
            new_className={styles.link_text}
          />
        </div>
        <hr className={styles.hr_dr_link} />
        <div
          className={styles.dropdown_link}
          onClick={() => {
            signOut();
          }}
        >
          <IconsFA
            size={"small"}
            title={"power_settings_new"}
            new_className={styles.link_icons}
          />
          <Atag181 text={"Sign Out"} new_className={styles.link_text} />
        </div>
      </div>
    </>
  );
};

export { DropdownAvatar };

const Navbar = ({ setChangeMain }) => {
  const user = useSelector((state) => state.user.value);

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const handleNavigation = (param) => {
    if (window.location.pathname === "/") {
      setChangeMain(param);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.lt}>
            <img src={logo} alt="logo" />
            <SearchBar />
          </div>
          <div className={styles.md}>
            <ul>
              <li>
                <HomeRoundedIcon
                  className={`${styles.icons_navigate} ${styles.icons_home}`}
                  onClick={() => handleNavigation(0)}
                />
              </li>
              <li>
                <DashboardCustomizeRoundedIcon
                  className={styles.icons_navigate}
                  onClick={() => handleNavigation(1)}
                />
              </li>
              <li>
                <LocalShippingRoundedIcon
                  className={styles.icons_navigate}
                  onClick={() => handleNavigation(4)}
                />
              </li>
              <li>
                <StorefrontRoundedIcon
                  className={styles.icons_navigate}
                  onClick={() => handleNavigation(6)}
                />
              </li>
            </ul>
          </div>
          <div className={styles.rt}>
            <div className={styles.container_user}>
              <button
                className={styles.avatar_button}
                onClick={() => {
                  setIsActive(!isActive);
                  setIsInitial(false);
                }}
              >
                <img
                  src={user.email === "admin@pasti" ? pastiImg : harisImg}
                  alt="avatar"
                  className={styles.avatar}
                />
              </button>
              <DropdownAvatar isActive={isActive} isInitial={isInitial} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
