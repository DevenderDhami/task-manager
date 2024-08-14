// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim() && dueDate) {
      onAddTask(title, description, dueDate);
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <form className="flex flex-col gap-2 mb-4" onSubmit={handleSubmit}>
      <input 
        className="p-2 border rounded" 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea
        className="p-2 border rounded" 
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input 
        className="p-2 border rounded" 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded mt-2"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
