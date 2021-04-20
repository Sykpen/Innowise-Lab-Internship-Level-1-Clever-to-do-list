import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { setPickedTodoInfo } from "../../../actions/data";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Firebase } from "../../../firebase";

const OneTodoContainer = ({ todoInfo }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.authorization.userId);

  const handleCheckboxChange = (e) => {
    e.preventDefault();
    const newStatus = {
      isDone: !todoInfo.isDone,
    };
    const todoRef = Firebase.database().ref(`${userId}/${todoInfo.date}`);
    todoRef.child(`${todoInfo.key}`).update(newStatus);
  };

  return (
    <div className={styles.todo_main}>
      <FormControlLabel
        control={
          <Checkbox checked={todoInfo.isDone} onChange={handleCheckboxChange} />
        }
      />
      <Link to="/update">
        <div
          className={`${styles.one_todo} ${todoInfo.isDone ? styles.doneText : null}`}
          onClick={() => dispatch(setPickedTodoInfo(todoInfo))}
        >
          {todoInfo.title}
        </div>
      </Link>
    </div>
  );
};

export default OneTodoContainer;
