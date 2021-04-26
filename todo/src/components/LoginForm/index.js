import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/authorization";
import Toast from "../Toast";
import { showToast } from "../../actions/toast";
import { TOAST_LOGIN_SUCCESS_MESSAGE } from "../../constants";
import {firebaseLoginUser } from "../../utils/firebaseHelper"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isLoginSuccesessfull, setIsLoginSuccesessfull] = useState();

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const userCreads = await firebaseLoginUser(email, password);
      dispatch(loginUser(userCreads.user.uid, userCreads.user.email));
      setIsLoginSuccesessfull(true);
      dispatch(showToast(true, "success", TOAST_LOGIN_SUCCESS_MESSAGE));
    } catch (error) {
      dispatch(showToast(true, "error", error.message));
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Toast />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/register">
                Don't have an account? Register
              </RouterLink>
            </Grid>
          </Grid>
        </form>
        {isLoginSuccesessfull ? <Redirect to="/"></Redirect> : null}
      </div>
    </Container>
  );
}
