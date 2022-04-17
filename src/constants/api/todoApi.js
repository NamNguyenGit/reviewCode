import axios from "axios";

export const getAllTodo = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

export const getDetailTodo = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
};


export const filterTodo = (value) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/todos?completed=${value}`
  );
};
