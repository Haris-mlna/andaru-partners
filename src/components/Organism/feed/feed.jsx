import styles from "./feed.module.css";
import { AvatarSidebar, PostImage } from "../../Atom/image-placeholder/image-placeholder";
import { Atag181, Ptag18, Span16 } from "../../Atom/text/text";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.headfeed}>
        <AvatarSidebar />
        <div className={styles.texthead}>
          <Atag181 text={"Haris Maulana"} />
          <Span16 text={"Active"} />
        </div>
      </div>
      <div className={styles.captionpost}>
        <Ptag18
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui!"
          }
        />
      </div>
      <div className={styles.imgpost}>
        <PostImage/>
      </div>
    </div>
  );
};

export default Feed;
