import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useGlobal } from '../../context/Global';
import { TODOLIST } from '../constants';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useGlobal()
    console.log("user", user)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-blue-100 fixed top-0 left-0 right-0 z-50'>
            <div className="container mx-auto flex items-center justify-between p-4">
                <Logo />

                <div className='lg:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-blue-600 focus:outline-none'
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                        </svg>
                    </button>
                </div>

                <div className='hidden lg:flex space-x-6'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                        }
                    >
                        Contact
                    </NavLink>
                    {user &&
                        <NavLink
                            to={TODOLIST}
                            className={({ isActive }) =>
                                isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                            }
                        >
                            Todo Listing
                        </NavLink>}
                </div>

                {user ?
                    <button
                        className='text-orange-600 hidden lg:block'
                        onClick={logout}
                    >
                        Logout
                    </button> :
                    <NavLink
                        to='/login'
                        className={({ isActive }) =>
                            isActive
                                ? 'hidden lg:block text-white bg-red-600 px-4 py-2 rounded hover:bg-red-800'
                                : 'hidden lg:block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-800'
                        }
                    >
                        Login
                    </NavLink>
                }
            </div>

            {isOpen && (
                <div className='lg:hidden'>
                    <div className='text-center flex flex-col space-y-4 p-4 bg-blue-100'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                            }
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                            }
                            onClick={toggleMenu}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                isActive ? 'text-red-600' : 'text-blue-600 hover:text-blue-800'
                            }
                            onClick={toggleMenu}
                        >
                            Contact
                        </NavLink>
                        {user ?
                            <button
                                className='text-orange-600'
                                onClick={logout}
                            >
                                Logout
                            </button> :
                            <NavLink
                                to='/login'
                                className={({ isActive }) =>
                                    isActive ? 'text-white bg-red-600 px-4 py-2 rounded hover:bg-red-800' : 'text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-800'
                                }
                                onClick={toggleMenu}
                            >
                                Login
                            </NavLink>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
