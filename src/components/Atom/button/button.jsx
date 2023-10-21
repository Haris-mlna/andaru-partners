import styles from "./button.module.css";

const ButtonPrimary = ({text}) => {
  return <button className={styles.buttonPrimary}>{text}</button>;
};

const ButtonDanger = ({text}) => {
  return <button className={styles.buttonDanger}>{text}</button>;
};


export { ButtonPrimary, ButtonDanger };
