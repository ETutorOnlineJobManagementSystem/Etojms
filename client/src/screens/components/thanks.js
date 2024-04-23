import React from 'react';
import { Link } from 'react-router-dom';

const ThanksPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center" style={{backgroundImage: `url('https://thumbs.dreamstime.com/z/businessman-using-digital-payment-interface-d-rendering-blurred-background-88776100.jpg')`}}>
      <div className="max-w-md bg-white p-8 shadow-md rounded-md text-center">
        <h1 className="text-3xl font-bold mb-8">Thanks for purchasing this course!</h1>
        <Link to="/coursecontent" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Explore the course</Link>
      </div>
    </div>
  );
};

export default ThanksPage;
