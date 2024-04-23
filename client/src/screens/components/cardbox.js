import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useCourseContext } from '../../context/CourseContext';

const CourseCard = (props) => {
  const navigate = useNavigate(); // Get navigate function
  const { setCourseName, setCourseDetails, setEnrollingCourse } = useCourseContext()

  const handleEnrollClick = (event) => {
    event.preventDefault(); // Prevent default form submission
    setCourseName(props.name)
    setCourseDetails(props.text)
    setEnrollingCourse(props)
    navigate('/enroll');
  };


  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 w-100 h-1000">
      {/* Course photo */}
      <img src={props.img} alt="Course" className="w-full h-70 object-cover" />

      <div className="p-4">
        {/* Course name */}
        <h3 className="text-xl font-semibold mb-2">{props.name}</h3>
        {/* Small description */}
        <p className="text-gray-600 text-sm mb-4">{props.text}</p>
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="h-4 w-4 text-yellow-500 fill-current" />
          ))}
        </div>
        {/* Hours of course */}
        <p className="text-gray-600 text-sm mb-2">{props.time}</p>
        {/* Price and Enroll button */}
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-semibold">{props.cost}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            onClick={handleEnrollClick}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;