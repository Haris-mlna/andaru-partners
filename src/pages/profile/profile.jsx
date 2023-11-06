import React, { useState } from "react";
import styles from "./profile.module.css";
import haris from "../../assets/images/harispp.png";
import { infoProfilee } from "../../../src/data/layout";

// Atom
import { H4tag, Span14 ,H6tag, Ptag16 } from "../../components/Atom/text/text";
import { ButtonPrimary } from "../../components/Atom/button/button";
import {
  ProfileBanner,
  TigaRoda,
} from "../../components/Atom/image-placeholder/image-placeholder";


// Organism
import { ResponsiveButtonProfile } from "../../components/Organism/responsive-button/responsive-button";
import { GroupGrid } from "../../components/Organism/group/group";
import { ContactOnly } from "../../components/Organism/contact/contact";
import { SidebarGallery } from "../../components/Organism/right-sidebar/right-sidebar";
import Navbar from "../../components/Organism/navbar/navbar";
import Feed from "../../components/Organism/feed/feed";

// REDUX JANGAN DIGANTI SAN {OKE RIS} !!!!!
import { useSelector } from "react-redux";
import NavbarMobile from "../../components/Organism/navbar-mobile/navbar-mobile";

const Profile = () => {
  const [active, setActive] = useState("post");

  // KODE HARIS JANGAN DIGANTI
  const user = useSelector((state) => state.user.value);

  console.log(user);

  const handlePage = (page) => {
    setActive(page);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.navbar}>
        <Navbar />
        <NavbarMobile/>
      </div>

      <div className={styles.containerMobile}>
        <ResponsiveButtonProfile />

        <div className={styles.headerProfile}>
          <ProfileBanner new_className={styles.profileBanner} />
          <div className={styles.detailProfile}>
            <div className={styles.detailProfilee}>
              <img className={styles.resImg} src={haris} alt="" />
              <div className={styles.wrapDetailProfile}>
                <H4tag new_className={styles.resh4} text={user.name} />
                <div className={styles.detailProf}>
                  <TigaRoda new_className={styles.restigaroda} />
                  <Span14
                    new_className={styles.resspan14}
                    text={"10k Followers"}
                  />
                  <Span14
                    new_className={styles.resspan14}
                    text={"200 Followings"}
                  />
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
            <button
              className={styles.coverbtn}
              onClick={() => handlePage("post")}
            >
              {" "}
              Post
            </button>

            <button
              className={styles.coverbtn}
              onClick={() => handlePage("about")}
            >
              About{" "}
            </button>

            <button
              className={styles.coverbtn}
              onClick={() => handlePage("photo")}
            >
              Photos
            </button>

            <button
              className={styles.coverbtn}
              onClick={() => handlePage("group")}
            >
              Groups
            </button>
          </div>
        </div>

        {/* POST */}
        {active === "post" && (
          <div className={styles.main_section_profile}>
            <div className={styles.profileLeft} id="aboutres">
              <About />
            </div>
            <div className={styles.profileMid}>
              <Feed />
            </div>
            <div className={styles.profileRight} id="contactres">
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
        ) : null}

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
              <GroupGrid />
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

const About = () => {
  return (
    <div className={styles.about}>
      <H6tag text={"About"} />
      <Ptag16
        text={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, corrupti."
        }
      />
      <hr />
      <H6tag text={"Info"} />
      <br />
      {infoProfilee.icons.map((x, index) => (
        <div className={styles.info_Profile_map} key={index}>
          <i className={x.className}>{x.title}</i>
          <span className="nameofinfo">{x.name}</span>
        </div>
      ))}
    </div>
  );
};