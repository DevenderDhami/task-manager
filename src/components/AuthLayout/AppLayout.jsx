import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <ToastContainer />

            <Header />

            <div className="flex-grow mt-16 bg-gray-100">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;
