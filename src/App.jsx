import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Our Products
      </h1>

      <Card />
    </div>
  );
};

export default App;
