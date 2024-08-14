import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission and show success message
        console.log('Form Data Submitted:', formData);

        // Show a success notification
        toast.success('Your message has been sent successfully!');

        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white p-6 w-full md:w-1/2 rounded-lg shadow-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                    If you have any questions or feedback, please fill out the form below or reach out to us via email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            rows="4"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;
