import styles from "./style.module.css";

import OneDayTodosContainer from "../OneDayTodosContainer";
import Calendar from "../Calendar";

function App() {
  return (
    <div className={styles.test_class}>
      <Calendar />
      <OneDayTodosContainer />
    </div>
  );
}

export default App;
