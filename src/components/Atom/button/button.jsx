import { IconsFA } from "../icons/icons";
import styles from "./button.module.css";

const ButtonPrimary = ({ text }) => {
  return <button className={styles.buttonPrimary}>{text}</button>;
};

const ButtonDanger = ({ text }) => {
  return <button className={styles.buttonDanger}>{text}</button>;
};

const ButtonView = ({ text }) => {
  return <button className={styles.buttonViewProfile}>{text}</button>;
};

const ButtonJoined = ({text}) => {
  return <button className={styles.buttonJoined}>{text}</button>
}

const ButtonInvite = ({text}) => {
  return <button className={styles.buttonInvite}>{text}</button>
}

const Actionpost = ({text, size, title , new_className, fs}) => {

  return(
    <button style={{fontSize:fs}} className={`${styles.actionPost} ${new_className}`} ><IconsFA size={size} title={title} new_className={new_className}/> {text} </button>
  )
}


export { ButtonPrimary, ButtonDanger, ButtonView, ButtonJoined, ButtonInvite, Actionpost };
