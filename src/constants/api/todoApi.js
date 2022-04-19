import axios from "axios";

export const getAllTodo = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

export const getDetailTodo = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
};

export const createTodo = (todo) => {
  return axios.post("https://jsonplaceholder.typicode.com/todos", todo);
};

export const filterTodo = (value) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/todos?completed=${value}`
  );
};

export const updateTodoStatus = (id, todo) => {
  return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, todo);
};
