import React from 'react';
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox'; // Assuming renamed CourseCard component
import FeaturedTopicsPage from '../components/featuredtopics';
import Footer from '../components/footer';
import {useState} from 'react';

const Python = () => {
  const [Course, Setcourse] = useState([
    {
      img: "https://img-c.udemycdn.com/course/750x422/2263832_ac7c_2.jpg",
      name: "The Complete Python bootcamp From Zero to Hero",
      text: "With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!. Enroll now!",
      time: "23 hrs",
      cost: "Rs/-2999",
    },
    {
      img: "https://media.licdn.com/dms/image/C5112AQFeuqx6Wk95fw/article-cover_image-shrink_600_2000/0/1520226588837?e=2147483647&v=beta&t=LjXL8Sf3VTbi1RaQWhvpzZj8th5y57KCdXO7AadcmiQ",
      name: "Python for Data Science and Machine Learning Bootcamp",
      text: "Topics span from programming with Python to cutting-edge machine learning techniques. The curriculum covers a wide array of subjects, including NumPy, Pandas, data visualization with Matplotlib, Seaborn, and Plotly, as well as a thorough exploration of machine learning concepts with SciKit-Learn. Enroll now!",
      time: "19 hrs",
      cost: "Rs/-1999",
    },
    {
      img: "https://proximsoft.com/wp-content/uploads/2024/03/1_ws0l7_iuNWU2ozGQdZuCJg.jpg",
      name: "Python and Djano Framework For Beginners",
      text: "By enrolling in this course, you go from Beginner to Advanced in Python Programming by learning all of the basics to Object Orientated Programming,Start from the basics and go all the way to creating your own applications and games. Enroll now!",
      time: "80 hrs",
      cost: "Rs/-4999",
    },
    {
      img: "https://img-c.udemycdn.com/course/480x270/919038_3ae1_13.jpg",
      name: "Python Mega Course: Learn in 60Days,Build 20 Apps",
      text: "The 20 applications have been carefully selected to cover all major Python areas including Python basics, task automation, data analysis and visualization, APIs, SQL databases, object-oriented programming, desktop GUIs, web development, data science, and machine learning. Enroll now!",
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

export default Python;