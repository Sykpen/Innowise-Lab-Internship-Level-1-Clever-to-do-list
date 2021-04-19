import { useDispatch } from "react-redux";
import { setNewDate } from "../../../actions/data";
import styles from "./style.module.css";

const CalendarOneDayContainer = ({ day, dayOfWeek, date }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.one_day_container}
      onClick={() => dispatch(setNewDate(date))}
    >
      <p>{dayOfWeek}</p>
      <p>{day}</p>
    </div>
  );
};

export default CalendarOneDayContainer;
