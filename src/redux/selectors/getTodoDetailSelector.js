import { useSelector } from "react-redux";

const GetTodoDetailSelector = () => {
  const todo = useSelector((state) => state.todoReducer.todo);

  return todo;
};

export default GetTodoDetailSelector;
