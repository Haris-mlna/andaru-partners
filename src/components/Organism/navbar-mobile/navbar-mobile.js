import styles from "./navbar-mobile.module.css";
import { useState } from "react";

import { IconsFA } from "../../Atom/icons/icons";
import { AvatarNavbar } from "../../Atom/image-placeholder/image-placeholder";
import { useNavigate } from "react-router-dom";
import { H6tag, Ptag16, Atag181 } from "../../Atom/text/text";
import { ButtonView } from "../../Atom/button/button";

const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

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
        <li
          onClick={() => {
            setIsActive(!isActive);
            setIsInitial(false);
          }}
        >
          <AvatarNavbar new_className={styles.avatar} />
          <DropdownAvatar isActive={isActive} isInitial={isInitial}/>
        </li>
      </ul>
    </div>
  );
};

const DropdownAvatar = ({ isActive, isInitial }) => {
  const navigate = useNavigate();

  const NavigateTo = () => {
    return navigate("/profile");
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
        }`}
      >
        <div className={styles.dropdown_avatar_info_container}>
          <div className={styles.dropdown_avatar_image_container}>
            <AvatarNavbar new_className={styles.dropdown_image} />
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
        <div className={styles.dropdown_link}>
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

export default NavbarMobile;
