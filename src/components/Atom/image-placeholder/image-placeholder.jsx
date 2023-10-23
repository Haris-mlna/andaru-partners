import styles from "./image-placeholder.module.css";

import confirmFriendImage from "../../../assets/images/confirm-friend-1.png";
import suggestionFriendImage from "../../../assets/images/suggestion-img-1.png";
import allFriend from "../../../assets/images/all-friend-img-1.png";
import avatarNavbar from "../../../assets/images/avatar-1.png";
import pagesImage from "../../../assets/images/page-img-1.png";
import pagesAvatar from "../../../assets/images/page-avatar-1.png";
import avatar from "../../../assets/images/avatar-1.png";
import postimage1 from "../../../assets/images/post-img-1.png";
import GroupImagePlaceholder from "../../../assets/images/group-img-1.png";
import GroupAvatarImagePlaceHolder from "../../../assets/images/group-avatar-1.png";

const TigaRoda = () => {
  return (
    <div className={styles.tiga_roda}>
      <img src={avatar} alt="avatar tiga roda" />
      <img className={styles.margin} src={avatar} alt="avatar tiga roda" />
      <img className={styles.margin} src={avatar} alt="avatar tiga roda" />
    </div>
  );
};

const ConfirmFriend = ({ new_className }) => {
  return (
    <img
      className={new_className}
      src={confirmFriendImage}
      alt={"confirm friend"}
    />
  );
};

const SuggestionFriend = ({ new_className }) => {
  return (
    <img
      className={new_className}
      src={suggestionFriendImage}
      alt={"suggest friend"}
    />
  );
};

const AllFriend = ({ new_className }) => {
  return <img className={new_className} src={allFriend} alt={"all friend"} />;
};

const AvatarNavbar = ({ new_className }) => {
  return (
    <img className={new_className} src={avatarNavbar} alt="avatar navbar" />
  );
};

const AvatarSidebar = ({ new_className }) => {
  return (
    <img className={new_className} src={avatarNavbar} alt="avatar sidebar" />
  );
};

const PagesCover = ({ new_className }) => {
  return <img className={new_className} src={pagesImage} alt="pages" />;
};

const PagesAvatar = ({ new_className }) => {
  return <img className={new_className} src={pagesAvatar} alt="pages avatar" />;
};

const PostImage = ({ new_className }) => {
  return <img className={new_className} src={postimage1} alt="pages avatar" />;
};

const GroupCover = ({ new_className }) => {
  return (
    <img className={new_className} src={GroupImagePlaceholder} alt="group" />
  );
};

const GroupAvatar = ({ new_className }) => {
  return <img className={new_className} src={GroupAvatarImagePlaceHolder} alt="avatar group" />;
};

export {
  TigaRoda,
  ConfirmFriend,
  SuggestionFriend,
  AllFriend,
  AvatarNavbar,
  AvatarSidebar,
  PagesCover,
  PagesAvatar,
  PostImage,
  GroupCover,
  GroupAvatar,
};
