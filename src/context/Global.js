import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a GlobalContext with default values
const GlobalContext = createContext({
    user: undefined,
    setUser: () => { },
    triggerLogin: async () => null,
    logout: () => { },
});

// Create a GlobalProvider component
export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState();
    const Navigate = useNavigate();

    // Retrieve user data from local storage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }
    }, [Navigate]);

    // Store user data in local storage whenever the user state changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('user');
        Navigate('/')
    };

    // Mock triggerLogin function (replace with your login logic)
    const triggerLogin = async () => {
        // Logic to authenticate user and set user data
        const newUser = { id: 1, name: 'John Doe' }; // Example user data
        setUser(newUser);
        Navigate('/dashboard'); // Redirect to dashboard after login
    };

    return (
        <GlobalContext.Provider value={{ user, setUser, triggerLogin, logout }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to access the GlobalContext
export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
    }
    return context;
};
