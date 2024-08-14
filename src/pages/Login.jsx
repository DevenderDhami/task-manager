import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../context/Global';
import { signIn } from '../services/userServices';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useGlobal(); // Ensure you have setUser in your global context
  const [formData, setFormData] = useState({
    username: "testuser",
    password: "password123"
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/todo-list');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signIn(formData.username, formData.password);
      if (response.success) {
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user)); // Save user info
        localStorage.setItem('token', response.token); // Save token if needed
        toast.success('Login successful!');
        navigate('/todo-list'); // Redirect to To-Do List page after successful login
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Login</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
