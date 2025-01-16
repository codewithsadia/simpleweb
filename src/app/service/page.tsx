import React from 'react';

const Service = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Web Development Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <li className="bg-orange-200 border-black shadow-md rounded-lg p-4 hover:bg-orange-300">Todo List Application</li>
        <li className="bg-orange-200 border-black shadow-md rounded-lg p-4 hover:bg-orange-300">Weather Dashboard</li>
        <li className="bg-orange-200 border-black shadow-md rounded-lg p-4 hover:bg-orange-300">Portfolio Website</li>
        <li className="bg-orange-200 border-black shadow-md rounded-lg p-4 hover:bg-orange-300">Blog Platform</li>
        <li className="bg-orange-200 border-black shadow-md rounded-lg p-4 hover:bg-orange-300">E-commerce Store</li>
        <li className="bg-orange-200 border-black shadow-md rounded-lg p-4 hover:bg-orange-300">Simple Calculater</li>
      </ul>
    </div>
  );
};

export default Service;
