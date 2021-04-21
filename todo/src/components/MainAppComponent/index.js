import styles from "./style.module.css";
import Button from "@material-ui/core/Button";

import OneDayTodosContainer from "../OneDayTodosContainer";
import Calendar from "../Calendar";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";

import { logoutUser } from "../../actions/authorization";
import { Link } from "react-router-dom";

const App = () => {
  const userEmail = useSelector(
    (state) => state.authorization.currentUserEmail
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    return auth.signOut();
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.welcome_user_text_container}>
        Welcome: {userEmail}
      </div>

      <Calendar />
      <OneDayTodosContainer />
      <Link to="/new">
        <Button
          variant="contained"
          color="primary"
          className={styles.create_new}
        >
          Create new Todo
        </Button>
      </Link>
      <Button
        variant="contained"
        color="primary"
        className={styles.logout}
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </div>
  );
};

export default App;
