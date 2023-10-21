import styles from './image-placeholder.module.css'

import confirmFriendImage from '../../../assets/images/confirm-friend-1.png'
import suggestionFriendImage from '../../../assets/images/suggestion-img-1.png'
import allFriend from '../../../assets/images/all-friend-img-1.png'
import avatarNavbar from '../../../assets/images/avatar-1.png'
import pagesImage from '../../../assets/images/page-img-1.png'
import pagesAvatar from '../../../assets/images/page-avatar-1.png'
import avatar from '../../../assets/images/avatar-1.png'

const TigaRoda = () => {
  return (
    <div className={styles.tiga_roda}>
      <img src={avatar} alt="avatar tiga roda" />
      <img className={styles.margin} src={avatar} alt="avatar tiga roda" />
      <img className={styles.margin} src={avatar} alt="avatar tiga roda" />
    </div>
  )
}

const ConfirmFriend = () => {
  return (
    <img className={styles.img_confirm} src={confirmFriendImage} alt={'confirm friend'} />
  )
}

const SuggestionFriend = () => {
  return (
    <img className={styles.img_suggest} src={suggestionFriendImage} alt={'suggest friend'}/>
  )
}

const AllFriend = () => {
  return (
    <img className={styles.img_allfriend} src={allFriend} alt={'all friend'}/>
  )
}

const AvatarNavbar = () => {
  return (
    <img className={styles.avatar_navbar} src={avatarNavbar} alt='avatar navbar'/>
  )
}

const AvatarSidebar = () => {
  return (
    <img className={styles.avatar_sidebar} src={avatarNavbar} alt='avatar sidebar'/>
  )
}

const PagesCover = () => {
  return (
    <img className={styles.pages_images} src={pagesImage} alt='pages'/>
  )
}

const PagesAvatar = () => {
  return (
    <img className={styles.pages_avatar} src={pagesAvatar} alt='pages avatar'/>
  )
}

export {
  TigaRoda,
  ConfirmFriend,
  SuggestionFriend,
  AllFriend,
  AvatarNavbar,
  AvatarSidebar,
  PagesCover,
  PagesAvatar
}