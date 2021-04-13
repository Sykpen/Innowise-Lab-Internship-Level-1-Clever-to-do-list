import styles from "./style.module.css";

const OneTodoContainer = ({ todoText }) => {
  return <div className={styles.one_todo}>{todoText}</div>;
};

export default OneTodoContainer;
