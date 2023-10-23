import { AvatarSidebar } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18 } from "../../Atom/text/text";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <div>
            <AvatarSidebar />
          </div>
          <div className={styles.info}>
            <Atag181 text={"Ikhsanudin M"} />
            <Ptag18 new_className={styles.ptag18} text={"@ikhsanudin"}/>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </>
  );
};

export default Sidebar;
