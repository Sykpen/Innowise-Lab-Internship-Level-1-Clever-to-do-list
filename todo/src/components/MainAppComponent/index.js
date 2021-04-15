import styles from "./style.module.css";

import OneDayTodosContainer from "../OneDayTodosContainer";
import Calendar from "../Calendar";
import RegistrationForm from "../RegistrationForm"
import { ToastContainer , toast } from 'react-toastify';
import {useSelector} from "react-redux"


const App = () => {
  const userEmail = useSelector(state => state.authorization.userEmail);

  return (
    <div className={styles.test_class}>
      <p>Welcome: {userEmail}</p>
      <Calendar />
      <OneDayTodosContainer />
    <ToastContainer />
    </div>
  );
}

export default App;
