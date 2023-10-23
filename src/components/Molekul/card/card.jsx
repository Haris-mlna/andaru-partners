import {
  GroupAvatar,
  GroupCover,
} from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Span16 } from "../../Atom/text/text";
import styles from "./card.module.css";

const GroupCard = () => {
  return (
    <>
      <div className={styles.card_group}>
        <div className={styles.cover_container}>
          <GroupCover />
          <GroupAvatar new_className={styles.avatar} />
        </div>
        <div className={styles.info}>
          <Atag181 text={'Travel Moon'}/>
          <Span16 text={
            'Public Group'
          }/>
        </div>
        <div className={styles.button_container}>

        </div>
      </div>
    </>
  );
};

export { GroupCard };
