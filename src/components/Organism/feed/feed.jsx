import styles from "./feed.module.css";

// Atom
import {
  AvatarSidebar,
  PostImage,
} from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18, Span12, Span16 } from "../../Atom/text/text";
import { Actionpost } from "../../Atom/button/button";

// Material Ui
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const Feed = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
          <div>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className={styles.heartChecked} />}
            />
            <Span12 text={"Like"} new_className={styles.like_text} />
          </div>
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
        <br />
        <hr />
        <div className={styles.commentpost}>
          <AvatarSidebar />
          <input
            className={styles.comment}
            type="text"
            name="commentpost"
            id="searchbar"
            placeholder="Masukan Komentar"
          />
          <Button className={styles.send_button} variant="contained" endIcon={<SendIcon />}></Button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
