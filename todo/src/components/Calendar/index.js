import styles from "./style.module.css";
import moment from "moment";
import { useState } from "react";
import CalendarOneDayContainer from "./CalendarOneDayContainer";

const Calendar = () => {
  let [currentAndFinalDay, setCurrentAndFinalDay] = useState(moment().date());
  let [currentMonth, setCurrentMonth] = useState(moment().month() + 1);

  const fulfillArrayOfDAys = () => {
    let i = currentAndFinalDay;
    let result = [];
    for (i; i <= moment().daysInMonth(); i++) {
      result.push({
        dayNumber: i,
        month: currentMonth,
        dayOfWeek: moment(`2021-${currentMonth}-${i}`).format("dddd"),
        date: moment(`2021-${currentMonth}-${i}`).format("YYYY-MM-DD"),
      });
      if (i === moment().daysInMonth()) {
        for (let i = 1; i <= moment().date(); i++) {
          result.push({
            dayNumber: i,
            month: currentMonth + 1,
            dayOfWeek: moment(`2021-${currentMonth}-${i}`).format("dddd"),
            date: moment(`2021-${currentMonth + 1}-${i}`).format("YYYY-MM-DD"),
          });
        }
      }
    }
    console.log(result);
    return result;
  };

  let [daysArray, setDaysArray] = useState(fulfillArrayOfDAys());

  return (
    <div className={styles.calendar_container}>
      {daysArray.map((day) => (
        <CalendarOneDayContainer
          day={day.dayNumber}
          dayOfWeek={day.dayOfWeek}
          date={day.date}
        />
      ))}
    </div>
  );
};

export default Calendar;
