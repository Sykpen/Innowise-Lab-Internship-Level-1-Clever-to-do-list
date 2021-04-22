/* eslint-disable no-unused-expressions */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import Firebase from "./utils/firebase";

import App from "./components/MainAppComponent";
import { rootReducer } from "./reducers/rootReduser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteForUpdateForm from "./components/PrivateRouteForUpdateForm";

import { auth } from "./utils/firebase";

import { loginUser } from "./actions/authorization";
import { setCurrentUserData } from "./actions/data";
import CreateTodoForm from "./components/CreateTodo";
import UpdateTodoForm from "./components/UpdateTodo";

import "./styles/colors.css";
import "./styles/global.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(loginUser(user.uid, user.email));
    Firebase.database()
      .ref(`${user.uid}`)
      .on("value", (snapshot) => {
        store.dispatch(setCurrentUserData(snapshot.val()));
      });
  }
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={App}></PrivateRoute>
            <Route path="/register" component={RegistrationForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/new" component={CreateTodoForm}></Route>
            <PrivateRouteForUpdateForm
              path="/update"
              component={UpdateTodoForm}
            ></PrivateRouteForUpdateForm>
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
});
