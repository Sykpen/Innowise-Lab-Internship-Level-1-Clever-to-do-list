import styles from "./style.module.css";

import OneDayTodosContainer from "../OneDayTodosContainer";
import Calendar from "../Calendar";
import {useDispatch, useSelector} from "react-redux"
import { auth } from "../../firebase";

import {logoutUser} from '../../actions/authorization'


const App = () => {
  const userEmail = useSelector(state => state.authorization.currentUserEmail);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
    return auth.signOut()
  }

  return (
    <div className={styles.test_class}>
      <p>Welcome: {userEmail}</p>
      <Calendar />
      <OneDayTodosContainer />
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default App;
