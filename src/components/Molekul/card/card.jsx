import { getSelectUtilityClasses } from "@mui/material";
import { ButtonInvite, ButtonJoined } from "../../Atom/button/button";
import {
  GroupAvatar,
  GroupCover,
  MarketPlaceAvatar,
  MarketplaceCover,
  TigaRoda,
} from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Span16 , Span14, H5tag, Ptag16} from "../../Atom/text/text";
import styles from "./card.module.css";

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Star } from "@mui/icons-material";

const CardGroup = ({name, member}) => {
  return (
    <>
      <div className={styles.card_group}>
        <div className={styles.cover_container}>
          <div className={styles.cover}>
            <GroupCover />
            <div className={styles.layer}>

            </div>
          </div>
          <GroupAvatar new_className={styles.avatar} />
        </div>
        <div className={styles.info}>
          <Atag181 text={name}/>
          <Span16 text={
            'Public Group'
          }/>
          <div className={styles.member}>
            <TigaRoda new_className={styles.memberImage}/>
            <Span14 text={member}/>
          </div>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.button_container}>
          <ButtonJoined text={'Joined'} new_className={styles.button_group}/>
          <ButtonInvite text={'Invite'} new_className={styles.button_group}/>
        </div>
      </div>
    </>
  );
};

const CardMarketplace = ({price , text}) => {
  return (
    <div className={styles.card_marketplace}>
      <div className={styles.cover_marketplace}>
        <MarketplaceCover/>
        <div className={styles.pricetag}>
          <H5tag text={price} new_className={styles.h5_price}/>
        </div>
      </div>
      <H5tag text={text} new_className={styles.h5_productname}/>
      <div className={styles.info_product}>
        <div className={styles.marketplace_avatar_container}>
          <MarketPlaceAvatar new_className={styles.market_avatar}/>
        </div>
        <div>
          <Atag181 new_className={styles.ptag_marketplace} text={'Travel Moon'} link={'/'}/>
          <Ptag16 new_className={styles.ptag_marketplace} text={"Zara"}/>
        </div>
      </div>
      <div>
      <i class="fa-solid fa-star"></i>
      </div>
    </div>
  )
}

export { CardGroup, CardMarketplace };
