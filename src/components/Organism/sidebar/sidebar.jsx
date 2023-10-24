import { sidebarData } from "../../../data/layout";
import { IconsFA } from "../../Atom/icons/icons";
import { AvatarSidebar } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18 } from "../../Atom/text/text";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <div className={styles.avatar_container}>
            <AvatarSidebar new_className={styles.avatar}/>
          </div>
          <div className={styles.info}>
            <Atag181 text={"Ikhsanudin M"}/>
            <Ptag18 new_className={styles.ptag18} text={"@ikhsanudin"}/>
          </div>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.bottom}>
          <ul>
            {sidebarData.icons.map((icon, index) => (
              <li key={index} className={styles.navigation}>
                  <IconsFA title={icon.title} size={'normal'} new_className={styles.icons_navigate}/>
                  <Atag181 text={icon.name} link={icon.url} new_className={styles.link_text}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
