import React from 'react';

const TodoFormModal = ({ todo, setTodo, handleAdd, handleUpdate, isEditMode, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    isEditMode ? handleUpdate() : handleAdd();
    onClose(); // Close the modal after submit
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-3">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{isEditMode ? 'Edit Todo' : 'Add Todo'}</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            placeholder="Title"
            className="p-2 border border-gray-300 rounded-lg w-full mb-2"
          />
          <textarea
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded-lg w-full mb-2"
          />
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => setTodo({ ...todo, completed: !todo.completed })}
              className="mr-2"
            />
            Completed
          </label>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-${isEditMode ? 'green' : 'blue'}-500 text-white px-4 py-2 rounded-lg`}
            >
              {isEditMode ? 'Update Todo' : 'Add Todo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoFormModal;
