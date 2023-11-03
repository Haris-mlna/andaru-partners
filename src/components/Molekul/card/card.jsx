import styles from "./card.module.css";

// Atom
import { ButtonInvite, ButtonJoined } from "../../Atom/button/button";
import {
  GroupAvatar,
  GroupCover,
  MarketPlaceAvatar,
  MarketplaceCover,
  TigaRoda,
} from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Span16 , Span14, H5tag, Ptag16} from "../../Atom/text/text";


const CardGroup = ({name, member}) => {
  return (
    <>
      <div className={styles.card_group}>
        <div className={styles.cover_container}>
          <div className={styles.cover}>
            <GroupCover new_className={styles.cover_img} />
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

const CardMarketplace = ({price , text, seller, brand}) => {
  return (
    <div className={styles.card_marketplace}>
      <div className={styles.cover_marketplace}>
        <MarketplaceCover new_className={styles.img_cover_marketplace}/>
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
          <Atag181 new_className={styles.ptag_marketplace} text={seller} link={'/'}/>
          <Ptag16 new_className={styles.ptag_marketplace} text={brand}/>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export { CardGroup, CardMarketplace };
