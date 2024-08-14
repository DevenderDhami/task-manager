import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "../services/todoServices";
import TodoFormModal from '../components/Todo/TodoFormModal';
import TaskList from '../components/Todo/TaskList';
import TodoViewModal from '../components/Todo/TodoViewModal';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', completed: false });
  const [editTodo, setEditTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [viewTodo, setViewTodo] = useState(null);

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
      const addedTodo = await createTodo(newTodo);
      setTodos([addedTodo, ...todos]);
      setNewTodo({ title: '', description: '', completed: false });
      toast.success('Todo added successfully');
    } catch (error) {
      toast.error('Failed to add todo');
    }
  };

  const handleUpdate = async () => {
    try {
      if (!editTodo || !editTodo.id) return; // Ensure editTodo and its id are defined
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
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const pageLimit = 4;

    if (totalPages <= pageLimit) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 rounded-lg ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {i}
          </button>
        );
      }
    } else {
      let start = Math.max(1, currentPage - Math.floor(pageLimit / 2));
      let end = Math.min(totalPages, start + pageLimit - 1);

      if (end - start + 1 < pageLimit) {
        start = Math.max(1, end - pageLimit + 1);
      }

      if (start > 1) {
        pageNumbers.push(
          <button
            key={1}
            onClick={() => handlePageClick(1)}
            className={`px-3 py-1 rounded-lg ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            1
          </button>
        );
        if (start > 2) pageNumbers.push(<span key="start-ellipsis" className="px-3 py-1 text-gray-500">...</span>);
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 rounded-lg ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {i}
          </button>
        );
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pageNumbers.push(<span key="end-ellipsis" className="px-3 py-1 text-gray-500">...</span>);
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handlePageClick(totalPages)}
            className={`px-3 py-1 rounded-lg ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 text-center">To-Do List</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos using title"
          className="p-2 border border-gray-300 rounded-lg mb-4 sm:mb-0 w-full sm:w-1/2"
        />
        <button
          onClick={() => {
            setNewTodo({ title: '', description: '', completed: false });
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add New Todo
        </button>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6">
        <TaskList
          todos={currentTodos}
          onEdit={(todo) => {
            setEditTodo(todo);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
          onView={(todo) => setViewTodo(todo)}
        />

        <div className="flex flex-col sm:flex-row justify-center mt-4 items-center">
          {/* <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50 text-sm"
          >
            Previous
          </button> */}

          <div className="flex gap-2 mt-2 sm:mt-0 overflow-x-auto whitespace-nowrap">
            {renderPageNumbers()}
          </div>
          {/* 
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg disabled:opacity-50 text-sm"
          >
            Next
          </button> */}
        </div>
      </div>

      {isModalOpen && (
        <TodoFormModal
          todo={editTodo || newTodo}
          setTodo={editTodo ? setEditTodo : setNewTodo}
          handleAdd={handleAdd}
          handleUpdate={handleUpdate}
          isEditMode={Boolean(editTodo)}
          onClose={() => {
            setEditTodo(null);
            setIsModalOpen(false);
          }}
        />
      )}

      {viewTodo && (
        <TodoViewModal
          todo={viewTodo}
          onClose={() => setViewTodo(null)}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default TodoList;
