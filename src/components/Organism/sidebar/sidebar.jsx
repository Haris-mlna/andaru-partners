import { AvatarSidebar } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18 } from "../../Atom/text/text";
import styles from "./sidebar.module.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
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

const Sidebar = ({ setChangeMain }) => {
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
                onClick={() => setChangeMain(index)}
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
