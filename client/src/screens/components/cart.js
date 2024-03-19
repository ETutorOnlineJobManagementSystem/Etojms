import React from 'react';
import javaimg from '../../images/javaimg.png'; // Replace with the path to your course image
import { FaStar } from 'react-icons/fa';

const Cart = () => {
  return (
    <>
    <h2 className="text-2xl font-semibold mb-4 text-center mt-4">Your Cart</h2>
    <div className="flex justify-center items-start">
      {/* First Course Card */}
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8 mr-4">
        <div className="p-4 border-b border-gray-200">
          <img src={javaimg} alt="Course" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Java Advanced to Expert</h3>
            <p className="text-gray-600 text-sm mb-2">Deep Dive in Core Java programming - Standard Edition. A Practical approach to learn Java. Become a Java Expert</p>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-2">Hours: 20</p>
            <p className="text-green-600 font-semibold">₹3999</p>
          </div>
        </div>
        {/* Checkbox */}
        <input type="checkbox" className="m-4" />
      </div>

      {/* Second Course Card */}
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200">
          <img src={javaimg} alt="Course" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Java Advanced to Expert</h3>
            <p className="text-gray-600 text-sm mb-2">Deep Dive in Core Java programming - Standard Edition. A Practical approach to learn Java. Become a Java Expert</p>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-2">Hours: 20</p>
            <p className="text-green-600 font-semibold">₹3999</p>
          </div>
        </div>
        {/* Checkbox */}
        <input type="checkbox" className="m-4" />
      </div>
    </div>
    {/* Subtotal */}
    <div className="flex justify-center">
    <div className="p-4 mt-4 shadow-lg w-64 text-center border border-black">
        <p className="text-xl font-semibold mb-2">Subtotal: ₹3999</p>
    </div>
    </div>
    </>
  );
};

export default Cart;
