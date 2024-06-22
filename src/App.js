// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskModal from './components/TaskModal';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sample Task 1', description: 'This is the first sample task.', dueDate: '2024-06-30', done: false },
    { id: 2, title: 'Sample Task 2', description: 'This is the second sample task.', dueDate: '2024-07-05', done: true }
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (title, description, dueDate) => {
    setTasks([...tasks, { id: Date.now(), title, description, dueDate, done: false }]);
  };

  const updateTask = (id, updatedTitle, updatedDescription, updatedDueDate) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title: updatedTitle, description: updatedDescription, dueDate: updatedDueDate } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const viewTaskDetails = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onUpdate={updateTask} 
        onDelete={deleteTask} 
        onToggleDone={toggleTaskDone} 
        onViewDetails={viewTaskDetails}
      />
      <TaskModal task={selectedTask} onClose={closeModal} />
    </div>
  );
};

export default App;
