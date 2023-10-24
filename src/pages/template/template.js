import styles from "./template.module.css";
import CollapsibleTable from "../../components/Organism/table/table";

import {
  Actionpost,
  ButtonDanger,
  ButtonInvite,
  ButtonJoined,
  ButtonPrimary,
  ButtonView,
} from "../../components/Atom/button/button.jsx";

import {
  Ptag16,
  Ptag18,
  Atag181,
  Atag182,
  Atag16,
  H4tag,
  H6tag,
  Span16,
  Span14,
  Span12,
} from "../../components/Atom/text/text.jsx";

import {
  TigaRoda,
  ConfirmFriend,
  SuggestionFriend,
  AllFriend,
  AvatarNavbar,
  AvatarSidebar,
  PagesCover,
  PagesAvatar,
  PostImage,
} from "../../components/Atom/image-placeholder/image-placeholder.jsx";

import { IconsFA } from "../../components/Atom/icons/icons.jsx";

import Navbar from "../../components/Organism/navbar/navbar.jsx";
import Sidebar from "../../components/Organism/sidebar/sidebar.jsx";
import Feed from "../../components/Organism/feed/feed.jsx";

import {
  CardGroup,
  CardMarketplace,
} from "../../components/Molekul/card/card.jsx";

const Template = () => {

  return (
    <div className={styles.pages}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <ButtonPrimary text={"Confirm"} />
        <ButtonDanger text={"Delete"} />
        <ButtonView text={"View Profile"} />
        <IconsFA title={"home"} new_className={""} size={"large"} />
        <IconsFA title={"feed"} new_className={""} size={"large"} />
        <ButtonJoined text={"Joined"} />
        <ButtonInvite text={"Invite"} />
        <TigaRoda />
        <ConfirmFriend />
        <SuggestionFriend />
        <AllFriend />
        <AvatarNavbar />
        <AvatarSidebar />
        <PagesCover />
        <PagesAvatar />
        <Ptag16 text={"p tag 16"} />
        <Ptag18 text={"p tag 18"} />
        <Atag181 link={"#"} text={"a tag 181"} />
        <Atag182 link={"#"} text={"a tag 182"} />
        <Atag16 link={"#"} text={"a tag 16"} />
        <H4tag text={"h4 tag"} />
        <H6tag text={"h6 tag"} />
        <Span16 text={"test"} />
        <Span14 text={"span 16"} />
        <Span12 text={"span 12"} />
        <Actionpost
          title={"favorite"}
          text={"Like"}
          new_className={styles.actionpost}
        />
        <Actionpost
          title={"comment"}
          text={"Comments"}
          new_className={styles.actionpost}
        />
        <Actionpost
          title={"share"}
          text={"share"}
          new_className={styles.actionpost}
        />
        <PostImage />
        <Feed />
        <CardGroup name={"Travel Moon"} member={"30k member"} />
        <CardMarketplace price={"$84"} text={`Men's Watch`} />
        <CollapsibleTable />
      </div>
    </div>
  );
};

export default Template;
