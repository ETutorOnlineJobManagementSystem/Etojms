import React from 'react';
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox'; // Assuming renamed CourseCard component
import FeaturedTopicsPage from '../components/featuredtopics';
import Footer from '../components/footer';
import {useState} from 'react';

const Testing = () => {
  const [Course, Setcourse] = useState([
    {
      img: "https://miro.medium.com/v2/resize:fit:698/1*jr3t5yR9h8GknkvJDR4izQ.png",
      name: "Appium -Mobile Testing(Android/IOS) from Scratch+Frameworks",
      text: "By the end of this course you will be able to automate any (Native,Hybrid,Web) Apps in Android/IOS using Appium,Design the Industry Standard Mobile framework from Scratch which is compatible for both Android and IOS Platforms. Enroll now!",
      time: "23 hrs",
      cost: "Rs/-2999",
    },
    {
      img: "https://img-b.udemycdn.com/course/750x422/675248_b27e_9.jpg",
      name: "WebServices/RestAPI Testing with SoapUI+RealTime Projects",
      text: "By end of this course you will be familiar in testing web services (both SOAP based and REST Services) manually and automate with Groovy scripting. The course has been prepared in such a way that you can learn this course starting from basics to advanced topics in a progressive way. Enroll now!",
      time: "19 hrs",
      cost: "Rs/-1999",
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

export default Testing;