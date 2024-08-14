import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createTodo, deleteTodo, fetchTodos, updateTodo } from '../../services/todoServices';

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', completed: false });
  const [editTodo, setEditTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        toast.error('Failed to fetch todos');
      }
    };
    loadTodos();
  }, []);

  const handleAdd = async () => {
    try {
      const addedTodo = await createTodo({
        title: newTodo.title,
        description: newTodo.description,
        completed: newTodo.completed
      });
      setTodos([addedTodo, ...todos]);
      setNewTodo({ title: '', description: '', completed: false });
      toast.success('Todo added successfully');
    } catch (error) {
      toast.error('Failed to add todo');
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedTodo = await updateTodo(editTodo.id, editTodo);
      setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
      setEditTodo(null);
      toast.success('Todo updated successfully');
    } catch (error) {
      toast.error('Failed to update todo');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
      toast.success('Todo deleted successfully');
    } catch (error) {
      toast.error('Failed to delete todo');
    }
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes((searchTerm || '').toLowerCase()) ||
    todo.description.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">To-Do List</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos"
          className="p-2 border border-gray-300 rounded-lg w-full mb-4"
        />

        <div className="mb-4">
          <input
            type="text"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            placeholder="Title"
            className="p-2 border border-gray-300 rounded-lg w-full mb-2"
          />
          <textarea
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded-lg w-full mb-2"
          />
          <label>
            <input
              type="checkbox"
              checked={newTodo.completed}
              onChange={() => setNewTodo({ ...newTodo, completed: !newTodo.completed })}
            />
            Completed
          </label>
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Add Todo
          </button>
        </div>

        {editTodo && (
          <div className="mb-4">
            <input
              type="text"
              value={editTodo.title}
              onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
              placeholder="Title"
              className="p-2 border border-gray-300 rounded-lg w-full mb-2"
            />
            <textarea
              value={editTodo.description}
              onChange={(e) => setEditTodo({ ...editTodo, description: e.target.value })}
              placeholder="Description"
              className="p-2 border border-gray-300 rounded-lg w-full mb-2"
            />
            <label>
              <input
                type="checkbox"
                checked={editTodo.completed}
                onChange={() => setEditTodo({ ...editTodo, completed: !editTodo.completed })}
              />
              Completed
            </label>
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Update Todo
            </button>
          </div>
        )}

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTodos.map((todo, index) => (
              <tr key={todo.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{todo.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{todo.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{todo.completed ? 'Completed' : 'Pending'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setEditTodo(todo)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>  
  );
};

export default TaskList;
