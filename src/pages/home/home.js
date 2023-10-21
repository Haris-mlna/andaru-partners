import {
  ButtonDanger,
  ButtonInvite,
  ButtonJoined,
  ButtonPrimary,
  ButtonView,
} from "../../components/Atom/button/button.jsx";

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
import Navbar from "../../components/Molekul/navbar/navbar.jsx";
import styles from "./home.module.css";

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
      </div>
    </div>
  );
};

export default Home;
