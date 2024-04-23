import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const CourseContent = () => {
  // Sample course data
  const course = {
    id: 1,
    name: "Javascript for beginners",
    modules: ["Introduction to JavaScript", "Functions", "Variables", "Control Flow"],
    time: "20 hrs",
    professor: "John Doe",
    description: "This course gets you started with an introduction to JavaScript, creating functions, creating variables, and calling these lines of code from your standard HTML pages and more.",
    cost: "Rs/-2999",
    image: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/javascriptfull.png", // Course image URL
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <div className="flex-grow justify-center px-4 py-8">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img src={course.image} alt={course.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
            <p className="text-lg text-gray-700 mb-2">Modules:</p>
            <ul className="list-disc pl-6 mb-4">
              {course.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mb-2">Time: {course.time}</p>
            <p className="text-lg text-gray-700 mb-2">Professor: {course.professor}</p>
            <p className="text-lg text-gray-700 mb-4">{course.description}</p>
            <p className="text-lg text-gray-700 mb-2">Cost: {course.cost}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">Enroll Now</button>
            {/* Add more features or details here */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseContent;
