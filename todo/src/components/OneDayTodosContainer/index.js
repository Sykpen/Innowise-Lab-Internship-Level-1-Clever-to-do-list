import styles from "./style.module.css";
import { useSelector } from "react-redux";

import OneTodoContainer from "./OneTodoContainer";
import { useEffect, useState } from "react";

const OneDayTodosContainer = () => {
  const [todoList, setTodoList] = useState();

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
      setTodoList(list);
    } else {
      setTodoList(null);
    }
  }, [dataForChosenDay]);

  return (
    <div>
      <div className={styles.todos_container}>
        {todoList ? (
          todoList.map((oneTask) => <OneTodoContainer todoInfo={oneTask} />)
        ) : (
          <div>No Todo's for today, go create one!</div>
        )}
      </div>
    </div>
  );
};

export default OneDayTodosContainer;
