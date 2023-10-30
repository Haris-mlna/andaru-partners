import styles from "./sidebar.module.css";
import { AvatarSidebar } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18 } from "../../Atom/text/text";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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
      name: "Faktur",
      icons: (
        <DescriptionOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Pengiriman",
      icons: (
        <LocalShippingOutlinedIcon
          fontSize={iconSize}
          className={styles.icons}
        />
      ),
    },
    {
      name: "Group",
      icons: (
        <GroupsOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Katalog Produk",
      icons: <StoreOutlinedIcon fontSize={iconSize} className={styles.icons} />,
    },
    {
      name: "Pembayaran",
      icons: (
        <PaymentOutlinedIcon fontSize={iconSize} className={styles.icons} />
      ),
    },
    {
      name: "Pengaturan",
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
  const handleOpen = (component, direction, isOpen, setOpen) => {
    const componentElement = document.querySelector(component);

    // Check if the component is already open
    const isComponentOpen =
      isOpen && (direction === "left" ? sidebarIsOpen : contactIsOpen);

    if (isComponentOpen) {
      if (direction === "left") {
        componentElement.style.left = "-100%"; // Close the component
        setSidebarIsOpen(false); // Close the sidebar
        console.log(sidebarIsOpen);
      } else if (direction === "right") {
        componentElement.style.right = "-100%"; // Close the component
        setContactIsOpen(false); // Close the contact
        console.log(contactIsOpen);
      }
    } else {
      if (direction === "left") {
        componentElement.style.left = "0px"; // Open the component
        setSidebarIsOpen(true);
        setContactIsOpen(false); // Close the contact
        console.log(sidebarIsOpen);
      } else if (direction === "right") {
        componentElement.style.right = "0px"; // Open the component
        setContactIsOpen(true);
        setSidebarIsOpen(false); // Close the sidebar
        console.log(contactIsOpen);
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
                className={styles.navigation}
                onClick={() => {
                  setChangeMain(index);
                  handleOpen(
                    "#sidebar-res",
                    "left",
                    sidebarIsOpen,
                    setSidebarIsOpen
                  );
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
