import React, { useState } from "react";
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
import ProfileFeed from "./profileFeed";
import { SidebarGallery } from "../../components/Molekul/right-sidebar/right-sidebar";
import { ContactOnly } from "../../components/Molekul/contact/contact";
import { GroupGrid } from "../../components/Organism/group/group";

const Profile = () => {
  const [active, setActive] = useState("post");

  const handlePage = (page) => {
    setActive(page);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.containerMobile}>

      <div className={styles.headerProfile}>
        <ProfileBanner new_className={styles.profileBanner} />
        <div className={styles.detailProfile}>
          <div className={styles.detailProfilee}>
            <img className={styles.resImg} src={haris} alt="" />
            <div className={styles.wrapDetailProfile}>
              <H4tag new_className={styles.resh4} text={"Haris Maulana"} />
              <div className={styles.detailProf}>
                <TigaRoda new_className={styles.restigaroda} />
                <Span14 new_className={styles.resspan14} text={"10k Followers"} />
                <Span14 new_className={styles.resspan14} text={"200 Followings"} />
              </div>
            </div>
          </div>
          <div className={styles.buttonEditProfile}>
            <ButtonPrimary new_className={styles.btnedt} text={"Edit Profile"} />
          </div>
        </div>
        <hr />
        <div className={styles.navProfile}>
        <button className={styles.coverbtn} onClick={() => handlePage("post")} > Post
          </button>
          
          <button className={styles.coverbtn} onClick={() => handlePage("about")} >About </button>
         
         <button className={styles.coverbtn} onClick={() => handlePage("photo")} >Photos</button>
          
          <button className={styles.coverbtn} onClick={() => handlePage("group")}>Groups</button>
         
        </div>
      </div>

      
      {/* POST */}
      {active === "post" && (
        <div className={styles.main_section_profile}>
          <div className={styles.profileLeft}>
            <About />
          </div>
          <div className={styles.profileMid}>
            <ProfileFeed />
          </div>
          <div className={styles.profileRight}>
            {" "}
            <SidebarGallery />
            <br />
            <ContactOnly />
          </div>
        </div>
      )}

      {/* ABOUT */}
      {active === "about" ? (
        <div className={styles.main_section_profile_about}>
          <div className={styles.aboutLeft}>
            <About />
          </div>
          <div className={styles.aboutRight}>
            {" "}
            <ContactOnly />
          </div>
        </div>
      ) : null
      }

      {/* PHOTO */}
      {active === "photo" && (
        <div className={styles.main_section_profile_photo}>
          <div className={styles.aboutLeft}>
            <SidebarGallery />
          </div>
          <div className={styles.aboutRight}>
            {" "}
            <ContactOnly />
          </div>
        </div>
      )}

      {/* GROUP */}
      {active === "group" && (
        <div className={styles.main_section_profile_group}>
          <div className={styles.aboutLeft}>
            <GroupGrid/>
          </div>
          <div className={styles.aboutRight}>
            {" "}
            <ContactOnly />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Profile;
