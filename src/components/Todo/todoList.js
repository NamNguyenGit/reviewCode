import { Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodo, filterTodo } from "../../redux/modules/actions";

const TodoList = ({ todo }) => {
  //!define
  const dispatch = useDispatch();

  //!state

  //!functions
  const onFilterChange = (value) => {
    dispatch(filterTodo(value));
  };

  const HandleOnClick = () => {
    dispatch(fetchTodo());
  };
  //!render
  return (
    <>
      <div className="todoList__container">
        <div>
          <div className="todoList__footer">
            <div className="todoList__footer__item">{todo.length} items </div>
            <div className="todoList__footer__item" onClick={HandleOnClick}>
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
                {item.completed ? <Checkbox checked /> : <Checkbox />}
              </div>
              <Link
                className="todoList__item__link"
                to={`/todoDetail/${item.id}`}
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
