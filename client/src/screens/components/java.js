import React from 'react';
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox'; // Assuming renamed CourseCard component
import FeaturedTopicsPage from '../components/featuredtopics';
import Footer from '../components/footer';
import {useState} from 'react';

const Java = () => {
  const [Course, Setcourse] = useState([
    {
      img: "https://courseclub.me/wp-content/uploads/2021/03/545444.jpg",
      name: "Java Programming for Complete Beginners",
      text: "If you've never programmed a computer before, or if you want to quickly learn Java, this is a perfect course for you. Basics of Designing a Class - Class, Object, State and Behavior. Deciding State and Constructors. Java Abstract Class and Interfaces. Enroll now!",
      time: "20 hrs",
      cost: "Rs/-2999",
    },
    {
      img: "https://favtutor.com/resources/images/uploads/Java_Projects_for_Beginners.jpg",
      name: "Project Development using JAVA for Beginners-2024",
      text: "The course is very comprehensive and will be constantly updated. With this course you will be able to understand Java 12 features very easily. So, this course covers each topic in details and is focused to break down topics with simplified examples. Enroll now!",
      time: "19 hrs",
      cost: "Rs/-1999",
    },
    {
      img: "https://img-c.udemycdn.com/course/750x422/4166416_66ba_5.jpg",
      name: "Selenium WebDriver with Java-Basics to Advanced+Frameworks",
      text: "By the end of this course,You will be Mastered on Selenium Webdriver with strong Core JAVA basics. Enroll now!",
      time: "80 hrs",
      cost: "Rs/-4999",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:500/1*pu_q-NQV_EnIHBgHdZsrXQ.jpeg",
      name: "Java In-Depth:Become a Complete Java Engineer!",
      text: "An industry-vetted, comprehensive curriculum to help you master Core & Advanced Java including JVM internals.Get real-world experience by developing an instructor-led Java EE-based Web application. Enroll now!",
      time: "40 hrs",
      cost: "Rs/-3999",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow flex items-center justify-center py-4"> {/* Center the heading */}
        <h1 className="text-3xl font-bold">Web Development</h1>
      </div>

      <div className="flex-grow justify-center px-4 py-4"> {/* Center the course cards */}
        <div className="grid grid-cols-3 gap-4 "> {/* Grid Layout */}
          {Course.map((course, index) => (
            <div key={index} className="rounded-md p-2 transition-transform duration-300 transform hover:scale-105">
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
      <Footer />
    </div>
  );
};

export default Java;