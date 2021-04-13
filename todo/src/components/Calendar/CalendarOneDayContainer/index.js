import styles from "./style.module.css";

const CalendarOneDayContainer = ({ day, dayOfWeek }) => {
  return (
    <div className={styles.one_day_container}>
      <p>{dayOfWeek}</p>
      <p>{day}</p>
    </div>
  );
};

export default CalendarOneDayContainer;
