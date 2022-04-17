import { useEffect } from "react";

const FilterTodo = (props) => {
  //!define
  const { todo, setFiltered, activeCompleted, setActiveCompleted } = props;
  //!state
  useEffect(() => {
    if (activeCompleted === "all") {
      setFiltered(todo);
      return;
    }
    const filterResult = todo.filter((todoItem) =>
      todoItem.completed.includes(activeCompleted)
    );
    setFiltered(filterResult);
  }, [activeCompleted]);
  //!render
  return (
    <div className="todoList__footer">
      <div className="todoList__footer__item">{todo.length} items </div>
      <div
        className="todoList__footer__item"
        onClick={() => setActiveCompleted("all")}
      >
        All
      </div>
      <div
        className="todoList__footer__item"
        onClick={() => setActiveCompleted(false)}
      >
        Not Completed
      </div>
      <div
        className="todoList__footer__item"
        onClick={() => setActiveCompleted(true)}
      >
        Completed
      </div>
    </div>
  );
};

export default FilterTodo;
