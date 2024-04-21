import React from 'react';
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox'; // Assuming renamed CourseCard component
import FeaturedTopicsPage from '../components/featuredtopics';
import Footer from '../components/footer';
import {useState} from 'react';

const StartPage = () => {
  const [Course, Setcourse] = useState([
    {
      img: "https://i.ytimg.com/vi/GoXwIVyNvX0/maxresdefault.jpg",
      name: "Java Full Course",
      text: "Master Java programming from fundamentals to advanced topics with our comprehensive course. Learn Java syntax, OOP, GUIs, databases, web development, and more. Enroll now!",
      time: "20 hrs",
      cost: "Rs/-2999",
    },
    {
      img: "https://i.ytimg.com/vi/m0LdKZ-prto/maxresdefault.jpg",
      name: "Python Full course",
      text: "Master Python programming from assurance to advanced topics with our comprehensive course. Learn Python syntax, OOP, GUIs, databases, web development, and more. Enroll now!",
      time: "19 hrs",
      cost: "Rs/-1999",
    },
    {
      img: "https://www.onlinecourserank.com/wp-content/uploads/best-online-web-development-courses-1200x675.jpg",
      name: "Web Development Course",
      text: "Unlock the world of web development. From HTML and CSS basics to advanced JavaScript frameworks and backend technologies, you'll learn everything you need to build stunning, interactive websites.Enroll now!",
      time: "80 hrs",
      cost: "Rs/-4999",
    },
    {
      img: "https://i.ytimg.com/vi/8hly31xKli0/maxresdefault.jpg",
      name: "Data Structures and Algorithms Full Course",
      text: "Master the fundamentals of data structures and algorithms with our comprehensive course. Explore essential concepts such as arrays, linked lists, trees, sorting algorithms, and more. This course will equip you with the knowledge and techniques you need to succeed.Enroll now!",
      time: "40 hrs",
      cost: "Rs/-3999",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.EHGxI-HPD94M6AMZDo2qsQAAAA&pid=Api&P=0&h=180",
      name: "Angularjs Full Course",
      text: "Unlock the power of AngularJS with our immersive learning experience. Delve into the intricacies of this dynamic JavaScript framework and discover how to build robust, interactive web applications with ease.Enroll now!",
      time: "30 hrs",
      cost: "Rs/-3999",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow flex items-center justify-center py-4"> {/* Center the heading */}
        <h1 className="text-3xl font-bold">Top courses</h1>
      </div>

      <div className="flex-grow justify-center px-4 py-4"> {/* Center the course cards */}
        <div className="grid grid-cols-3 gap-4"> {/* Grid Layout */}
          {Course.map((course, index) => (
            <div key={index} className="rounded-md p-2">
              <CourseCard
                img={course.img}
                name={course.name}
                text={course.text}
                time={course.time}
                cost={course.cost}
              />
            </div>
          ))}
        </div>
      </div>

      <FeaturedTopicsPage />
      <Footer />
    </div>
  );
};

export default StartPage;