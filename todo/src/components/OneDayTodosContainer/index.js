import styles from "./style.module.css";
import { useSelector } from "react-redux";

import OneTodoContainer from "./OneTodoContainer";
import { useEffect, useState } from "react";

const OneDayTodosContainer = () => {
  const [todoList, setTodoList] = useState();

  const [doneTodos, setDoneTodos] = useState();

  const userData = useSelector((state) => state.data.currentUserData);

  const currentPickedData = useSelector(
    (state) => state.data.currentPickedData
  );

  const dataForChosenDay = userData ? userData[currentPickedData] : null;

  useEffect(() => {
    const list = [];
    if (dataForChosenDay) {
      for (const [key, value] of Object.entries(dataForChosenDay)) {
        let newObj = { key, ...value };
        list.push(newObj);
      }
      setTodoList(list.filter((todo) => todo.isDone === false));
      setDoneTodos(list.filter((todo) => todo.isDone === true));
    } else {
      setTodoList(null);
      setDoneTodos(null);
    }
  }, [dataForChosenDay]);

  console.log(todoList);
  console.log(doneTodos);

  return (
    <div>
      <div className={styles.todos_container}>
        <div>
          <h3>Todo</h3>
          {todoList ? (
            todoList.map((oneTask) => <OneTodoContainer todoInfo={oneTask} />)
          ) : (
            <div>No Todo's for today, go create one!</div>
          )}
        </div>
        {doneTodos ? (
          <div>
            <h3>Completed</h3>
            {doneTodos.map((oneTask) => (
              <OneTodoContainer todoInfo={oneTask} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OneDayTodosContainer;
