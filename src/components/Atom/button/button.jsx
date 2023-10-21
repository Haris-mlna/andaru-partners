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


export { ButtonPrimary, ButtonDanger, ButtonView, ButtonJoined, ButtonInvite };
