import React from 'react';
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox'; // Assuming renamed CourseCard component
import FeaturedTopicsPage from '../components/featuredtopics';
import Footer from '../components/footer';
import {useState} from 'react';

const Web = () => {
  const [Course, Setcourse] = useState([
    {
      img: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/javascriptfull.png",
      name: "Javascript for beginners",
      text: "This course gets you started with an introduction to JavaScript, it gets you started with basic functionality such as creating functions, creating variables, and calling these lines of code from your standard HTML pages and more. Enroll now!",
      time: "20 hrs",
      cost: "Rs. -2999",
    },
    {
      img: "https://www.tesrokerala.org/wp-content/uploads/2021/06/Full-Stack-development.png",
      name: "Complete FullStack Course",
      text: "Full stack development is the process of designing, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development. Enroll now!",
      time: "19 hrs",
      cost: "Rs. -1999",
    },
    {
      img: "https://img-c.udemycdn.com/course/750x422/1987226_5e0b_3.jpg",
      name: "Angular The Complete Guide",
      text: "By enrolling in this course, you'll gain in-depth knowledge of creating Angular applications, covering modules, directives, components, data binding, routing, HTTP access, and more. Practical examples and a major project help reinforce the concepts. Enroll now!",
      time: "80 hrs",
      cost: "Rs. -4999",
    },
    {
      img: "https://www.copycat.dev/blog/wp-content/uploads/2022/12/REact-Redux.png",
      name: "Modern React with Redux",
      text: "Redux is an open-source JavaScript library used to manage application state. React uses Redux for building the user interface. Enroll now!",
      time: "40 hrs",
      cost: "Rs. -3999",
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
            <div key={index} className="rounded-md p-2 ">
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

export default Web;