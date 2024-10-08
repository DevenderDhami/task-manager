import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (todo) => {
  // Generate a unique ID using the current timestamp and a random number
  const newTodo = {
    ...todo,
    id: Date.now() + Math.floor(Math.random() * 1000)
  };
  const response = await axios.post(API_URL, newTodo);
  return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
    console.log("id",id)
  const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
