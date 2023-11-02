import styles from "./sidebar.module.css";
import * as React from "react";
import { AvatarSidebar } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18 } from "../../Atom/text/text";

// Material UI
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";


const iconSize = "medium";

const sidebarData = {
  icons: [
    {
      name: "Home",
      icons: <HomeOutlinedIcon fontSize={iconSize} className={styles.icons} />,
    },
    {
      name: "Dashboard",
      icons: (
        <DashboardCustomizeOutlinedIcon
          fontSize={iconSize}
          className={styles.icons}
        />
      ),
    },
    {
      name: "Invoice",
      icons: (
        <DescriptionOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Invoice Reciept",
      icons: (
        <ReceiptOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Delivery",
      icons: (
        <LocalShippingOutlinedIcon
          fontSize={iconSize}
          className={styles.icons}
        />
      ),
    },
    {
      name: "Partner",
      icons: (
        <GroupsOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Product Catalog",
      icons: <StoreOutlinedIcon fontSize={iconSize} className={styles.icons} />,
    },
    {
      name: "Payments",
      icons: (
        <PaymentOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Setting",
      icons: (
        <SettingsOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
  ],
};

const Sidebar = ({
  setChangeMain,
  sidebarIsOpen,
  setSidebarIsOpen,
  contactIsOpen,
  setContactIsOpen,
}) => {
  const [isActive, setIsActive] = React.useState("Home");

  const handleOpen = (component, direction, isOpen, setOpen) => {
    const componentElement = document.querySelector(component);
    // Check if the component is already open
    const isComponentOpen =
      isOpen && (direction === "left" ? sidebarIsOpen : contactIsOpen);

    if (isComponentOpen) {
      if (direction === "left") {
        componentElement.style.left = "-100%"; // Close the component
        setSidebarIsOpen(false); // Close the sidebar
      } else if (direction === "right") {
        componentElement.style.right = "-100%"; // Close the component
        setContactIsOpen(false); // Close the contact
      }
    } else {
      if (direction === "left") {
        componentElement.style.left = "0px"; // Open the component
        setSidebarIsOpen(true);
        setContactIsOpen(false); // Close the contact
      } else if (direction === "right") {
        componentElement.style.right = "0px"; // Open the component
        setContactIsOpen(true);
        setSidebarIsOpen(false); // Close the sidebar
      }
    }
  };

  return (
    <>
      <div className={styles.sidebar} id="sidebar-res">
        <div className={styles.top}>
          <div className={styles.avatar_container}>
            <AvatarSidebar new_className={styles.avatar} />
          </div>
          <div className={styles.info}>
            <Atag181 text={"Ikhsanudin M"} />
            <Ptag18 new_className={styles.ptag18} text={"@ikhsanudin"} />
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.bottom}>
          <ul>
            {sidebarData.icons.map((icon, index) => (
              <li
                key={index}
                className={`${styles.navigation} ${
                  isActive === icon.name ? styles.active : ""
                }`}
                onClick={() => {
                  setChangeMain(index);
                  handleOpen(
                    "#sidebar-res",
                    "left",
                    sidebarIsOpen,
                    setSidebarIsOpen
                  );
                  setIsActive(icon.name);
                }}
              >
                {icon.icons}
                <Atag181
                  text={icon.name}
                  link={icon.url}
                  new_className={styles.link_text}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
