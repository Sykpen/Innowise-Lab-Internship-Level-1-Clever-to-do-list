import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { register, registerError } from "../../actions/authorization";
import { useDispatch } from "react-redux";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {auth} from '../../firebase'

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

const RegistrationForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [userSuccessesfullyRegistred, setuserSuccessesfullyRegistred] = useState(false);

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const userCreds = await auth.createUserWithEmailAndPassword(email, password);
      dispatch(register(userCreds.user.uid, userCreds.user.email));
      setuserSuccessesfullyRegistred(true);
    } catch (error) {
      dispatch(registerError(error.message));
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
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
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                <RouterLink to="/login">Have an account? Login</RouterLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {userSuccessesfullyRegistred ? <Redirect to="/"></Redirect> : null}
    </Container>
  );
};

export default RegistrationForm;
