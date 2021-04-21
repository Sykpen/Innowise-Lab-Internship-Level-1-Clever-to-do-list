import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteForUpdateForm = ({ component: Component, ...rest }) => {
  const isTodoWasPicked = useSelector(state => state.data.pickedTodoId)

  return (
    <Route
      {...rest}
      render={(props) => {
        return isTodoWasPicked ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/"></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRouteForUpdateForm;
