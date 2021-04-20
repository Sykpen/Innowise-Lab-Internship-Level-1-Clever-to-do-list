import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";

import { Firebase } from "../../firebase";
import { Link as RouterLink } from "react-router-dom";

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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const UpdateTodoForm = () => {
  const classes = useStyles();

  const pickedTodoTitle = useSelector((state) => state.data.pickedTodoTitle);
  const pickedTodoDescription = useSelector(
    (state) => state.data.pickedTodoDescription
  );
  const pickedTodoDate = useSelector((state) => state.data.pickedTodoDate);
  const pickedTodoId = useSelector((state) => state.data.pickedTodoId)

  console.log(pickedTodoId)

  const [title, setTitle] = useState(pickedTodoTitle);
  const [description, setDescription] = useState(pickedTodoDescription);
  const [date, setDate] = useState(pickedTodoDate);
  

  const userId = useSelector((state) => state.authorization.userId);

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescriptionChange = ({ target }) => {
    setDescription(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    const todo = { title, description, date };
    const todoRef = Firebase.database().ref(`${userId}/${date}`);
    todoRef.child(`${pickedTodoId}`).update(todo);
    setTitle("");
    setDescription("");
    setDate("");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ToDo
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={title}
            autoFocus
            onChange={handleTitleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            multiline
            rows={7}
            required
            fullWidth
            value={description}
            name="description"
            label="Description"
            id="description"
            onChange={handleDescriptionChange}
          />
          <TextField
            id="date"
            label="Selected Date"
            type="date"
            value={date}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDateChange}
            disabled={true}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update ToDo
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/">Go back to main page</RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default UpdateTodoForm;
