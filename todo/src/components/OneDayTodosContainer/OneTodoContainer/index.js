import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { setPickedTodoInfo } from "../../../actions/data";

const OneTodoContainer = ({ todoInfo }) => {
  const dispatch = useDispatch();

  return (
    <Link to="/update">
      <div
        className={styles.one_todo}
        onClick={() => dispatch(setPickedTodoInfo(todoInfo))}
      >
        {todoInfo.title}
      </div>
    </Link>
  );
};

export default OneTodoContainer;
