// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete, onToggleDone, onViewDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const [updatedDueDate, setUpdatedDueDate] = useState(task.dueDate);

  const handleUpdate = () => {
    onUpdate(task.id, updatedTitle, updatedDescription, updatedDueDate);
    setIsEditing(false);
  };

  return (
    <tr className={`border-b ${task.done ? 'bg-gray-100' : ''}`}>
      <td className="py-2 px-4">
        {isEditing ? (
          <input 
            className="w-full p-2 border rounded" 
            value={updatedTitle} 
            onChange={(e) => setUpdatedTitle(e.target.value)} 
          />
        ) : (
          <span className={`${task.done ? 'line-through' : ''}`}>
            {task.title}
          </span>
        )}
      </td>
      <td className="py-2 px-4">
        {isEditing ? (
          <textarea
            className="w-full p-2 border rounded"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        ) : (
          <span className={`${task.done ? 'line-through' : ''}`}>
            {task.description}
          </span>
        )}
      </td>
      <td className="py-2 px-4">
        {isEditing ? (
          <input 
            type="date" 
            className="w-full p-2 border rounded"
            value={updatedDueDate}
            onChange={(e) => setUpdatedDueDate(e.target.value)}
          />
        ) : (
          <span className={`${task.done ? 'line-through' : ''}`}>
            {task.dueDate}
          </span>
        )}
      </td>
      <td className="py-2 px-4 flex gap-2 justify-center">
        {isEditing ? (
          <button 
            className="p-2 bg-blue-500 text-white rounded" 
            onClick={handleUpdate}
          >
            Save
          </button>
        ) : (
          <button 
            className="p-2 bg-yellow-500 text-white rounded" 
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button 
          className={`p-2 ${task.done ? 'bg-gray-500' : 'bg-green-500'} text-white rounded`} 
          onClick={() => onToggleDone(task.id)}
        >
          {task.done ? 'Undo' : 'Done'}
        </button>
        <button 
          className="p-2 bg-red-500 text-white rounded" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
        <button 
          className="p-2 bg-blue-400 text-white rounded" 
          onClick={() => onViewDetails(task)}
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
