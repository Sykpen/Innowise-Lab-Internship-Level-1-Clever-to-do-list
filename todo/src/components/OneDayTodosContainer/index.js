import styles from "./style.module.css";
import { connect } from "react-redux";
import { addNewTodo } from "../../actions";
import OneTodoContainer from "./OneTodoContainer";

const OneDayTodosContainer = ({ data, addNewTodo }) => {
  return (
    <div>
      <div className={styles.todos_container}>
        {data.map((oneTask) => (
          <OneTodoContainer todoText={oneTask.title} />
        ))}
      </div>
      <button onClick={() => addNewTodo()}>Add new task</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.oneDayData,
});

const mapDispatchToProps = {
  addNewTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneDayTodosContainer);
