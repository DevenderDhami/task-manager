import React from 'react';

const TodoViewModal = ({ todo, onClose }) => {
  if (!todo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Todo Details</h2>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>Description:</strong> {todo.description}</p>
        <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>
        </div>
      </div>
    </div>
  );
};

export default TodoViewModal;
