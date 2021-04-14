import styles from "./style.module.css";

import OneDayTodosContainer from "../OneDayTodosContainer";
import Calendar from "../Calendar";
import RegistrationForm from "../RegistrationForm"

function App() {

  return (
    <div className={styles.test_class}>
      <RegistrationForm/>
      {/* <Calendar />
      <OneDayTodosContainer /> */}
    </div>
  );
}

export default App;
