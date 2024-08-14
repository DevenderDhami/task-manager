import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN, TODOLIST } from '../constants';
import { useGlobal } from '../../context/Global';

const LandingPage = () => {
    const { user } = useGlobal()
    return (
        <div className="bg-gray-100 flex flex-col">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white text-center py-16 flex-grow">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Welcome to TodoOP</h1>
                    <div className="text-white">
                    </div>
                    <p className="text-lg mb-6">
                        The ultimate task management tool designed to help you stay organized and achieve your goals.
                    </p>
                    <NavLink
                        to={user ? TODOLIST : LOGIN}
                        className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
                    >
                        Get Started
                    </NavLink>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Features</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">Organize Your Tasks</h3>
                            <p className="text-gray-700 mb-4">
                                Easily manage and prioritize your tasks with customizable categories and deadlines.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">Stay On Track</h3>
                            <p className="text-gray-700 mb-4">
                                Set reminders and get notifications to keep you on track and never miss a deadline.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">Collaborate with Teams</h3>
                            <p className="text-gray-700 mb-4">
                                Work together with your team on shared projects and tasks with ease.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-200 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
                            <p className="text-gray-700 mb-4">
                                "TodoOp has revolutionized the way I manage my tasks. It's intuitive and keeps me on top of everything!"
                            </p>
                            <p className="font-semibold">- Alex Smith</p>
                        </div>
                        <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
                            <p className="text-gray-700 mb-4">
                                "The collaboration features have been a game-changer for our team. Highly recommended!"
                            </p>
                            <p className="font-semibold">- Jamie Doe</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
