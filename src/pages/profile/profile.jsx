import {
  ProfileBanner,
  TigaRoda,
} from "../../components/Atom/image-placeholder/image-placeholder";
import Navbar from "../../components/Organism/navbar/navbar";
import styles from "./profile.module.css";
import haris from "../../assets/images/harispp.png";
import { H4tag, Span14 } from "../../components/Atom/text/text";
import { ButtonPrimary } from "../../components/Atom/button/button";
import About from "./about";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.headerProfile}>
        <ProfileBanner new_className={styles.profileBanner} />
        <div className={styles.detailProfile}>
          <div className={styles.detailProfilee}>
            <img src={haris} alt="" />
            <div className={styles.wrapDetailProfile}>
              <H4tag text={"Haris Maulana"} />
              <div className={styles.detailProf}>
                <TigaRoda />
                <Span14 text={"10k Followers"} />
                <Span14 text={"200 Followings"} />
              </div>
            </div>
          </div>
          <div className={styles.buttonEditProfile}>
            <ButtonPrimary
              new_className={styles.btnedt}
              text={"Edit Profile"}
            />
          </div>
        </div>
        <hr />
        <div className={styles.navProfile}>
          <ButtonPrimary new_className={styles.hiddenStyle} text={"Post"} />
          <ButtonPrimary new_className={styles.hiddenStyle} text={"About"} />
          <ButtonPrimary new_className={styles.hiddenStyle} text={"Photo "} />
          <ButtonPrimary new_className={styles.hiddenStyle} text={"Groups"} />
        </div>
      </div>
      <div className={styles.main_section_profile}>
        <div className={styles.profileLeft}></div>
        <div className={styles.profileMid}></div>
        <div className={styles.profileRight}></div>
        <About/>
      </div>
    </div>
  );
};

export default Profile;
