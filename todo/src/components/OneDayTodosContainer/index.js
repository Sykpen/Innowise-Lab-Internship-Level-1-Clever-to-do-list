import styles from "./style.module.css";
import { useSelector } from "react-redux";

import OneTodoContainer from "./OneTodoContainer";
import React, { useEffect, useState } from "react";

const mapTodos = (todosArray) => {
  return todosArray.map((oneTask) => (
    <OneTodoContainer todoInfo={oneTask} key={oneTask.key} />
  ));
};

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

  return (
    <div>
      <div className={styles.todos_container}>
        <div>
          <h3>Todo</h3>
          {todoList && todoList.length > 0 ? (
            mapTodos(todoList)
          ) : (
            <div>No Todo's for today, go create one!</div>
          )}
        </div>
        {doneTodos && doneTodos.length > 0 ? (
          <div>
            <h3>Completed</h3>
            {mapTodos(doneTodos)}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OneDayTodosContainer;
