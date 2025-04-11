import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    setMessage('Added to Cart!');
    setTimeout(() => setMessage(''), 2000);
  };

  const handleBuyNow = () => {
    setMessage('Purchased Successfully!');
    setTimeout(() => setMessage(''), 2000);
  };

  const toggleFavorite = () => {
    setIsFavorited(prev => !prev);
  };

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg p-2 hover:shadow-2xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700"
        >
          <FaShoppingCart />
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          className="px-3 py-1 bg-green-600 text-white rounded-xl text-sm hover:bg-green-700"
        >
          Buy Now
        </button>

        <button onClick={toggleFavorite} className="text-xl text-red-500">
          {isFavorited ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      {message && (
        <div className="mt-2 text-sm text-green-600 font-medium">{message}</div>
      )}
    </div>
  );
};

export default ProductCard;
