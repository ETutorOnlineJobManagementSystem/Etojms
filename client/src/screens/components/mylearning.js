import React from "react";
import NavBar from "./navbar";
import CourseCard from '../components/enrolledCourseCard';
import { useCourseContext } from "../../context/CourseContext";

const MyLearnings = () => {
  const { enrolledCourses } = useCourseContext()

  return (
    <>
      <NavBar />
      <h1 style={{ margin: 25, fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>My Learnings</h1>

      {enrolledCourses.length > 0 ? (
        <div className="flex-grow justify-center px-4 py-4"> {/* Center the course cards */}
          <div className="grid grid-cols-3 gap-4"> {/* Grid Layout */}
            {enrolledCourses.map((course, index) => (
              <div key={index} className="rounded-md p-2">
                <CourseCard
                  course={course}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 style={{ fontSize: 25, textAlign: 'center', marginTop: 150 }}>No courses enrolled yet</h1>
      )}
    </>
  )
}

export default MyLearnings