import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Placeholder for user data

// Dummy user data for simulation
const dummyUsers = [
  { username: 'testuser', password: 'password123', id: 1 },
  { username: 'johndoe', password: 'mypassword', id: 2 }
];

export const signIn = async (username, password) => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simulate user authentication
    const user = dummyUsers.find(user => user.username === username && user.password === password);

    if (user) {
      // Simulate token generation
      const token = 'dummy-token'; // In a real scenario, this would be provided by your backend
      return { success: true, token, user };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  } catch (error) {
    return { success: false, message: 'Sign-in failed' };
  }
};
