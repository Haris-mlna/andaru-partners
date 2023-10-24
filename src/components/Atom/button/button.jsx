import { IconsFA } from "../icons/icons";
import styles from "./button.module.css";

const ButtonPrimary = ({ text, new_className, onPress }) => {
  return (
    <button className={`${styles.buttonPrimary} ${new_className}`} onClick={onPress}>
      {text}
    </button>
  );
};

const ButtonDanger = ({ text, new_className, onPress }) => {
  return (
    <button className={`${styles.buttonDanger} ${new_className}`} onClick={onPress}>
      {text}
    </button>
  );
};

const ButtonView = ({ text, new_className, onPress }) => {
  return (
    <button className={`${styles.buttonViewProfile} ${new_className}`} onClick={onPress}>
      {text}
    </button>
  );
};

const ButtonJoined = ({ text, new_className, onPress }) => {
  return (
    <button className={`${styles.buttonJoined} ${new_className}`} onClick={onPress}>
      {text}
    </button>
  );
};

const ButtonInvite = ({ text, new_className, onPress }) => {
  return (
    <button className={`${styles.buttonInvite} ${new_className}`} onClick={onPress}>
      {text}
    </button>
  );
};

const Actionpost = ({ text, size, title, new_className, fs }) => {
  return (
    <button
      style={{ fontSize: fs }}
      className={`${styles.actionPost} ${new_className}`}
    >
      <IconsFA size={size} title={title} new_className={new_className} /> {text}{" "}
    </button>
  );
};

export {
  ButtonPrimary,
  ButtonDanger,
  ButtonView,
  ButtonJoined,
  ButtonInvite,
  Actionpost,
};
