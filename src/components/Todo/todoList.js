import { Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { RouteBase } from "../../constants/routeUrl";
import {
  fetchTodo,
  filterTodo,
  updateTodoStatus,
} from "../../redux/modules/todo/actions";

const TodoList = ({ todo }) => {
  //!define
  const dispatch = useDispatch();
  const history = useHistory();
  //!state

  //!functions
  const onFilterChange = (value) => {
    dispatch(filterTodo(value));
  };

  const handleOnClick = () => {
    dispatch(fetchTodo());
  };

  const onChangeCompleted = (item, index) => {
    const singleTodo = todo.find((idx) => idx.id === item.id);

    const values = {
      ...singleTodo,
      completed: !singleTodo.completed,
    };

    const id = item.id;

    dispatch(updateTodoStatus({ id, values }));
    toast.success("Congratulation, you have f*ck that todo");
  };

  //!render
  return (
    <>
      <div className="todoList__container">
        <div>
          <div className="todoList__footer">
            <div className="todoList__footer__item">{todo.length} items </div>
            <div className="todoList__footer__item" onClick={handleOnClick}>
              All
            </div>
            <div
              className="todoList__footer__item"
              onClick={() => onFilterChange(false)}
            >
              Not Completed
            </div>
            <div
              className="todoList__footer__item"
              onClick={() => onFilterChange(true)}
            >
              Completed
            </div>
          </div>
        </div>
        {todo &&
          todo.map((item, index) => (
            <div key={index} className="todoList__item">
              <div className="todoList__item__check">
                <Checkbox
                  onChange={() => onChangeCompleted(item, index)}
                  checked={item.completed ? true : false}
                />
              </div>
              <Link
                to={RouteBase.DetailWithID(item.id)}
                className="todoList__item__link"
              >
                <div
                  className={
                    item.completed === true
                      ? "todoList__item__completed"
                      : "todoList__item__text"
                  }
                >
                  {item.title}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
