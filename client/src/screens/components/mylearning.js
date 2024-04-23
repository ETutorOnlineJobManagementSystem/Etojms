import React, { useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const MyLearning = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      img: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/javascriptfull.png",
      name: "Javascript for beginners",
      progress: 50 // Sample progress percentage
    },
    {
      id: 2,
      img: "https://www.tesrokerala.org/wp-content/uploads/2021/06/Full-Stack-development.png",
      name: "Complete FullStack Course",
      progress: 25 // Sample progress percentage
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <div className="flex-grow justify-center px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Learning</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map(course => (
            <div key={course.id} className="rounded-lg bg-white shadow-md p-6 flex flex-col items-center justify-center">
              <img src={course.img} alt={course.name} className="w-full h-auto rounded-lg mb-4" />
              <p className="text-lg font-semibold">{course.name}</p>
              <div className="flex items-center">
                <div className="relative w-24 h-2 bg-gray-200 rounded-full mr-2">
                  <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span>{course.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyLearning;
