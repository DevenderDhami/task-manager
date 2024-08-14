import React from 'react';

const About = () => {
    return (<div className=' h-full py-5'>
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">About TodoOp</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to TodoOp, your ultimate task management solution! TodoOp is designed to help you stay organized and manage your tasks efficiently. Whether you're juggling multiple projects or just trying to keep track of your daily to-do list, TodoOp provides a user-friendly interface and powerful features to keep you on track.
            </p>
            <h2 className="text-2xl font-semibold text-blue-500 mb-3">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
                At TodoOp, our mission is to empower individuals and teams to achieve their goals through effective task management. We believe that with the right tools, everyone can enhance their productivity and achieve a balanced life.
            </p>
            <h2 className="text-2xl font-semibold text-blue-500 mb-3">Features</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
                <li>Easy-to-use interface for managing tasks and projects.</li>
                <li>Customizable task categories and priorities.</li>
                <li>Reminders and notifications to keep you on track.</li>
                <li>Collaboration features for team projects.</li>
                <li>Integration with your favorite tools and apps.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-500 mb-3">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-4">
                We value your feedback and are always here to help. If you have any questions or suggestions, feel free to reach out to us at <a href="mailto:support@todoop.com" className="text-blue-600 hover:underline">support@todoop.com</a>.
            </p>
            <p className="text-lg text-gray-700">
                Thank you for choosing TodoOp! We look forward to helping you achieve your productivity goals.
            </p>
        </div>
    </div>
    );
};

export default About;
