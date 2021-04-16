import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";


import { addNewTodo } from "../../actions";
import OneTodoContainer from "./OneTodoContainer";

const OneDayTodosContainer = () => {
  const oneDayData = useSelector(state => state.data.oneDayData);

  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.todos_container}>
        {oneDayData.map((oneTask) => (
          <OneTodoContainer todoText={oneTask.title} />
        ))}
      </div>
      <button onClick={() => dispatch(addNewTodo())}>Add new task</button>
    </div>
  );
};

export default OneDayTodosContainer;
