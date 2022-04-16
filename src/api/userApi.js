import axios from "axios";

export const getAllTodo = () => {
  return axios.get(
    "https://jsonplaceholder.typicode.com/todos?_page=7&_limit=6"
  );
};
