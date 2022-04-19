import { useSelector } from "react-redux";

const GetTodosSelector = () => {
  const todos = useSelector((state) => state.todoReducer.todos);

  return todos;
};

export default GetTodosSelector;
