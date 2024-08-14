import React from 'react';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
const TaskList = ({ todos, onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">{todo.title}</td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">{todo.description}</td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500">
                {todo.completed ? 'Completed' : 'Pending'}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xl font-medium flex gap-5" >
                <button
                  onClick={() => onView(todo)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => onEdit(todo)}
                  className="text-yellow-500 hover:text-yellow-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
