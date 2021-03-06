import styles from "./style.module.css";
import Button from "@material-ui/core/Button";

import OneDayTodosContainer from "../OneDayTodosContainer";
import Calendar from "../Calendar";
import { useDispatch, useSelector } from "react-redux";
import { firebaceLogoutUser } from "../../utils/firebaseHelper";

import { logoutUser } from "../../actions/authorization";
import { Link } from "react-router-dom";
import { showToast } from "../../actions/toast";

import Toast from "../Toast";
import { TOAST_LOGOUT_MESSAGE } from "../../constants";

const App = () => {
  const userEmail = useSelector(
    (state) => state.authorization.currentUserEmail
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(showToast(true, "success", TOAST_LOGOUT_MESSAGE));
    firebaceLogoutUser();
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
      <Toast />
    </div>
  );
};

export default App;
