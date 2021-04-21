import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserAlreadyLoggedIn = useSelector(
    (state) => state.authorization.userId
  );

  return (
    <Route
      {...rest}
      render={(props) => {
        return isUserAlreadyLoggedIn ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
