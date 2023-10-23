import {
  ButtonDanger,
  ButtonInvite,
  ButtonJoined,
  ButtonPrimary,
  ButtonView,
} from "../../components/Atom/button/button.jsx";

import { Ptag16, Ptag18, Atag181, Atag182, Atag16, H4tag, H6tag  } from "../../components/Atom/text/text.jsx";

import {
  TigaRoda,
  ConfirmFriend,
  SuggestionFriend,
  AllFriend,
  AvatarNavbar,
  AvatarSidebar,
  PagesCover,
  PagesAvatar,
} from "../../components/Atom/image-placeholder/image-placeholder.jsx";

import { IconsFA } from "../../components/Atom/icons/icons.jsx";
import styles from "./home.module.css";
import Navbar from "../../components/Organism/navbar/navbar.jsx";

const Home = () => {

  const liked = <i class={`material-symbols-outlined ${styles.likes}`}> thumb_up </i>

  return (
    <div className={styles.pages}>
      <Navbar />
      <div className={styles.content}>
        <ButtonPrimary text={"Confirm"} />
        <ButtonDanger text={"Delete"} />
        <ButtonView text={"View Profile"} />
        <IconsFA title={"home"} />
        <IconsFA title={"feed"} />
        <ButtonJoined text={"Joined"} />
        <ButtonInvite text={"Invite"} />
        <TigaRoda/>
        <ConfirmFriend/>
        <SuggestionFriend/>
        <AllFriend/>
        <AvatarNavbar/>
        <AvatarSidebar/>
        <PagesCover/>
        <PagesAvatar/>
        <ButtonPrimary text={liked}/>
        <Ptag16 text={'p tag 16'}/>
        <Ptag18 text={'p tag 18'}/>
        <Atag181 link={'#'} text={ 'a tag 181'}/>
        <Atag182 link={"#"} text={ 'a tag 182'}/>
        <Atag16 link={'#'} text={'a tag 16'}/>
        <H4tag text={'h4 tag'}/>
        <H6tag text={'h6 tag'}/>
      </div>
    </div>
  );
};

export default Home;
