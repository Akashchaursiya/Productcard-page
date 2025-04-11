import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <Card />
    </div>
  );
};

export default App;
