import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewDate } from "../../../actions/data";
import styles from "./style.module.css";

const CalendarOneDayContainer = ({ day, dayOfWeek, date }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.data.currentUserData);

  const [unDoneTodos, setUnDoneTodos] = useState();
  const [doneTodos, setDoneTodos] = useState();

  const dataForChosenDay = userData ? userData[date] : null;

  useEffect(() => {
    const list = [];
    if (dataForChosenDay) {
      for (const [key, value] of Object.entries(dataForChosenDay)) {
        let newObj = { key, ...value };
        list.push(newObj);
      }
      setUnDoneTodos(list.filter((todo) => todo.isDone === false));
      setDoneTodos(list.filter((todo) => todo.isDone === true));
    } else {
      setUnDoneTodos(null);
      setDoneTodos(null);
    }
  }, [dataForChosenDay]);


  return (
    <div
      className={styles.one_day_container}
      onClick={() => dispatch(setNewDate(date))}
    >
      <p>{dayOfWeek}</p>
      <p>{day}</p>
      <div className={styles.dots_container}>
        {unDoneTodos && unDoneTodos.length > 0 ? <div className={styles.undone_todos}></div> : null}
        {doneTodos && doneTodos.length > 0 ? <div className={styles.done_todos}></div> : null}
      </div>
    </div>
  );
};

export default CalendarOneDayContainer;
