import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs w-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2">₹{product.price}</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
