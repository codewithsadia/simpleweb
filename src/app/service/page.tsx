import React from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/data`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Example Component
const Service = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Web Development Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">Todo List Application</li>
        <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">Weather Dashboard</li>
        <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">Portfolio Website</li>
        <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">Blog Platform</li>
        <li className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100">E-commerce Store</li>
      </ul>
    </div>
  );
};

export default Service;
