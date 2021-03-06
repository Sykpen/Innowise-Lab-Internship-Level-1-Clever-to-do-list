import styles from "./style.module.css";
import moment from "moment";
import { useState } from "react";
import CalendarOneDayContainer from "./CalendarOneDayContainer";

const fulfillArrayOfDays = (arr, newMonth, year) => {
  let i = moment().date();
  for (i; i <= moment().daysInMonth(); i++) {
    arr.push({
      dayNumber: i,
      month: newMonth,
      dayOfWeek: moment(`${year}-${newMonth}-${i}`).format("dddd"),
      date: moment(`${year}-${newMonth}-${i}`).format("YYYY-MM-DD"),
    });
    if (i === moment().daysInMonth()) {
      for (let i = 1; i <= moment().date(); i++) {
        arr.push({
          dayNumber: i,
          month: newMonth + 1,
          dayOfWeek: moment(`${year}-${newMonth}-${i}`).format("dddd"),
          date: moment(`${year}-${newMonth + 1}-${i}`).format("YYYY-MM-DD"),
        });
      }
    }
  }
  return arr;
};

const Calendar = () => {

  let [currentMonth, setCurrentMonth] = useState(moment().month() + 1);
  let [currentYear, setCurrentYear] = useState(moment().year());

  let [daysArray, setDaysArray] = useState(
    fulfillArrayOfDays([], currentMonth, currentYear)
  );

  const handleScrollEvent = (e) => {
    if (
      e.target.scrollWidth <
      e.target.scrollLeft + e.target.offsetWidth + 100
    ) {
      const nextMonthArr = [];
      if (currentMonth + 1 > 12) {
        setCurrentMonth(1);
        setCurrentYear(currentYear + 1);
        const updatedArray = fulfillArrayOfDays(
          nextMonthArr,
          1,
          currentYear + 1
        );
        setDaysArray([...daysArray, ...updatedArray]);
      } else {
        setCurrentMonth(currentMonth + 1);
        const updatedArray = fulfillArrayOfDays(
          nextMonthArr,
          currentMonth + 1,
          currentYear
        );
        setDaysArray([...daysArray, ...updatedArray]);
      }
    }
  };

  return (
    <div className={styles.calendar_container} onScroll={handleScrollEvent}>
      {daysArray.map((day, i) => (
        <CalendarOneDayContainer
          day={day.dayNumber}
          dayOfWeek={day.dayOfWeek}
          date={day.date}
          dayId={i}
          key={Date.now() + i}
        />
      ))}
    </div>
  );
};

export default Calendar;
