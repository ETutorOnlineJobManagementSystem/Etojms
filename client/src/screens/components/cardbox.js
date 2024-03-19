import React from 'react';
import { FaStar } from 'react-icons/fa';
import javaimg from "../../images/javaimg.png"

const CourseCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      {/* Course photo */}
      <img src={javaimg} alt="Course" className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Course name */}
        <h3 className="text-xl font-semibold mb-2">Java Advanced to Expert</h3>
        {/* Small description */}
        <p className="text-gray-600 text-sm mb-4">Deep Dive in Core Java programming -Standard Edition. A Practical approach to learn Java. Become a Java Expert</p>
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="h-4 w-4 text-yellow-500 fill-current" />
          ))}
        </div>
        {/* Hours of course */}
        <p className="text-gray-600 text-sm mb-2">Hours: 20</p>
        {/* Price */}
        <p className="text-green-600 font-semibold">₹3999</p>
      </div>
    </div>
  );
};

export default CourseCard;
