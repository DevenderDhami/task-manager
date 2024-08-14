import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ABOUT, CONTACT, HOME, LOGIN, TODOLIST } from './constants';
import HomePage from '../pages/Home';
import Login from '../pages/Login';
import AppLayout from './AuthLayout/AppLayout';
import About from '../pages/About';
import TodoList from '../pages/TodoList';
import Error404 from '../pages/Error404';
import Contact from '../pages/Contact';
import { GlobalProvider } from '../context/Global';

const AllRoutes = () => {
  return (
    <Router>
      <GlobalProvider>
        <AppLayout>
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={CONTACT} element={<Contact />} />
            <Route path={TODOLIST} element={<TodoList />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AppLayout>
      </GlobalProvider>
    </Router>
  );
};

export default AllRoutes;
