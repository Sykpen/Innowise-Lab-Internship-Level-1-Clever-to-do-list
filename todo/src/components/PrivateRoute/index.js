import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userEmail = useSelector((state) => state.authorization.userEmail);
  console.log(userEmail)
  return (
    <Route
      {...rest}
      render={(props) => {
        return userEmail ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
