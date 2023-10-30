import { Button } from "@mui/material";
import {
  ProfileCover,
  ProfilePicture,
} from "../../components/Atom/image-placeholder/image-placeholder";
import styles from "./settings.module.css";
import { IconsFA } from "../../components/Atom/icons/icons";

const Settings = () => {
  return (
    <div className={styles.wrapPage}>
    <div className={styles.page}>
      <div className={styles.img_settings}>
        <h5>Profile Image</h5>
        <ProfilePicture />
        <Button className={styles.primary} size="medium" variant="contained">
          Change Profiles
        </Button>
        <h5>Cover Image</h5>
        <ProfileCover new_className={styles.img_profile_cover} />
        <Button className={styles.primary} size="medium" variant="contained">
          Change Cover
        </Button>
      </div>
      <div className={styles.general}>
        <h5>General Information</h5>
        <div className={styles.flex}>
          <div className={styles.container_input}>
            <label>Name</label>
            <input type="text" placeholder="Andaru Group" />
          </div>
          <div className={styles.container_input}>
            <label>Number</label>
            <input type="text" placeholder="+62 8123 4567 890" />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.container_input}>
            <label>Email</label>
            <input type="text" placeholder="Email@examples.com" />
          </div>
        </div>
        <div className={`${styles.flex} ${styles.align}`}>
          <div className={styles.bio}>
            <h6>Bio</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, <br/>
              corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing <br/>
              elit. Minima, corrupti.
            </p>
          </div>
          <div className={styles.icon_container}>
            <IconsFA
              new_className={styles.icon}
              title={"public"}
              size={"small"}
            />
            <IconsFA
              new_className={styles.icon}
              title={"more_horiz"}
              size={"small"}
            />
          </div>
        </div>
        <div className={styles.saved_container}>
          <Button className={styles.primary} size="medium" variant="contained">
            Saved Change
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Settings;
