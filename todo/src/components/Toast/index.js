import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../actions/toast";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toast = () => {
  const showToastToUser = useSelector((state) => state.toast.showToast);
  const toastType = useSelector((state) => state.toast.toastType);
  const toastText = useSelector((state) => state.toast.toastText);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(showToast(false));
  };

  return (
    <Snackbar
      open={showToastToUser}
      autoHideDuration={2000}
      onClose={() => handleClose()}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={() => handleClose()} severity={toastType}>
        {toastText}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
