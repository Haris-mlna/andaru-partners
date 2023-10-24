import styles from "./image-placeholder.module.css";

import confirmFriendImage from "../../../assets/images/confirm-friend-1.png";
import suggestionFriendImage from "../../../assets/images/suggestion-img-1.png";
import allFriend from "../../../assets/images/all-friend-img-1.png";
import avatarNavbar from "../../../assets/images/avatar-1.png";
import pagesImage from "../../../assets/images/page-img-1.png";
import pagesAvatar from "../../../assets/images/page-avatar-1.png";
import avatar from "../../../assets/images/avatar-1.png";
import postimage1 from "../../../assets/images/post-img-1.png";
import groupAvatar from "../../../assets/images/group-avatar-1.png";
import groupCover from "../../../assets/images/group-img-1.png";
import marketPlaceCover from "../../../assets/images/marketplace-img-1.png";
import marketPlaceAvatar from "../../../assets/images/page-avatar-1.png";
import requestAvatar from "../../../assets/images/avatar-4.png";
import contactAvatar from "../../../assets/images/avatar-6.png";
import profilebanner from "../../../assets/images/profile-cover-img.png";

const TigaRoda = ({ new_className }) => {
  return (
    <div className={`${styles.tiga_roda} ${new_className}`}>
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

const GroupAvatar = ({ new_className }) => {
  return <img className={new_className} src={groupAvatar} alt="group avatar" />;
};

const GroupCover = ({ new_className }) => {
  return <img className={new_className} src={groupCover} alt="cover group" />;
};

const MarketplaceCover = ({ new_className }) => {
  return (
    <img
      src={marketPlaceCover}
      className={new_className}
      alt={"marketplace cover"}
    />
  );
};

const MarketPlaceAvatar = ({ new_className }) => {
  return (
    <img
      src={marketPlaceAvatar}
      className={new_className}
      alt={"marketplace avatar"}
    />
  );
};

const RequestAvatar = ({ new_className }) => {
  return (
    <img className={new_className} src={requestAvatar} alt="request avatar" />
  );
};

const ContactAvatar = ({ new_className }) => {
  return (
    <img className={new_className} src={contactAvatar} alt="contact avatar" />
  );
};

const ProfileBanner = ({ new_className }) => {
  return (
    <img className={new_className} src={profilebanner} alt="profileimg" />
  );
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
  GroupAvatar,
  GroupCover,
  MarketPlaceAvatar,
  MarketplaceCover,
  RequestAvatar,
  ContactAvatar,
  ProfileBanner,
};
