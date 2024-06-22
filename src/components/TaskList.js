// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete, onToggleDone, onViewDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Title</th>
            <th className="py-2 px-4 border-b border-gray-300">Description</th>
            <th className="py-2 px-4 border-b border-gray-300">Due Date</th>
            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onUpdate={onUpdate}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
              onViewDetails={onViewDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
