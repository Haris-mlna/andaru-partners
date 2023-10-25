import styles from "./feed.module.css";
import {
  AvatarSidebar,
  PostImage,
} from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18, Span12, Span16 } from "../../Atom/text/text";
import { Actionpost, ButtonPrimary } from "../../Atom/button/button";
import { IconsFA } from "../../Atom/icons/icons";
const Feed = () => {
  return (
    <div className={styles.containerfeed}>
      <div className={styles.feed}>
        <div className={styles.headfeed}>
          <AvatarSidebar />
          <div className={styles.texthead}>
            <Atag181 new_className={styles.resatag18} text={"Haris Maulana"} />
            <Span16 new_className={styles.resspan16} text={"Baru Saja"} />
          </div>
        </div>
        <div className={styles.captionpost}>
          <Ptag18
            new_className={styles.ptag18}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui!"
            }
          />
        </div>
        <div className={styles.imgpost}>
          <PostImage new_className={styles.respostimg} />
        </div>
        <hr />
        <div className={styles.actionpost}>
          <Actionpost fs={16} size={"small"} title={"favorite"} text={"Like"} />
          <Actionpost
            fs={16}
            size={"small"}
            title={"comment"}
            text={"Comments"}
          />
          <Actionpost fs={16} size={"small"} title={"share"} text={"Shares"} />
        </div>
        <hr />
        <br />
        <div className={styles.commentpost}>
          <AvatarSidebar />
          <input
            className={styles.comment}
            type="text"
            name="commentpost"
            id="searchbar"
            placeholder="Masukan Komentar"
          />
          <ButtonPrimary
            new_className={styles.btnSendComment}
            text={
              <IconsFA new_className={styles.sendComment} title={"near_me"} />
            }
          />
        </div>
        <div className={styles.resultComment}>
          <div className={styles.wrapResultComment}>
            <div className={styles.profilrAv}>
              {" "}
              <AvatarSidebar />
            </div>
            <div className={styles.firstComment}>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos, temporibus inventore molestiae reiciendis non neque
                tenetur amet autem nisi pariatur voluptatum necessitatibus quis?
                Libero commodi consequuntur modi beatae architecto iusto, in
                nesciunt iure laudantium enim ex deserunt quibusdam voluptas
                delectus non natus ipsam voluptates eaque? Nulla fugit
                laudantium tenetur blanditiis!
              </span>
            </div>
          </div>
          <div className={styles.actionOfComments}>
            <Span12 text={"Balas"} />
            <Span12 text={"Suka"} />
            <Span12 text={"Bagikan"} />
          </div>
        </div>

        <div className={styles.resultReplyComment}>
          <div className={styles.wrapReplyComment}>
            <div className={styles.profilrAv}>
              {" "}
              <AvatarSidebar />
            </div>
            <div className={styles.replyComment}>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos
              </span>
            </div>
          </div>
          <div className={styles.actionOfComments}>
            <Span12 text={"Balas"} />
            <Span12 text={"Suka"} />
            <Span12 text={"Bagikan"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
