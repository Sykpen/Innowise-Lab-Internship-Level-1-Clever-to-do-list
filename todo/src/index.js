import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import App from "./components/MainAppComponent";
import { rootReducer } from "./reducers/rootReduser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from 'react-toastify';

import { reactReduxFirebase } from "react-redux-firebase";
import FirebaseForApp from "./firebase";
const createStoreWithFirebase = compose(reactReduxFirebase(FirebaseForApp))(createStore);



// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware))
// );

const store = createStoreWithFirebase(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={App}></PrivateRoute>
          <Route path="/register" component={RegistrationForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <ToastContainer />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
