import * as React from 'react';
// Replace incorrect import paths with correct ones

// enrolledCourseCard.js
import Stack from '@mui/material/Stack'; // Change from '@mui/joy/Stack'
import LinearProgress from '@mui/material/LinearProgress'; // Change from '@mui/joy/LinearProgress'

// enrolledCourseDetails.js
import Button from '@mui/material/Button'; // Change from '@mui/material/Button'

import { Link } from 'react-router-dom'; // Import useNavigate hook

const CourseCard = (props) => {
  const { course } = props

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 w-100 h-1000">

      <img src={course.img} alt="Course" className="w-full h-70 object-cover" />

      <div className="p-4">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3 className="text-xl font-semibold mb-2" style={{ overflow: 'hidden' }}>{course.name}</h3>
          <p className="text-gray-600 text-sm mb-2" style={{
            paddingTop: 6
          }}>{course.time}</p>
        </div>
        <div className="flex items-center mb-2">
          <p>Access until: 15-Aug-2024</p>
        </div>
        <div className="flex items-center justify-between">
          <Stack spacing={2} sx={{ flex: 1, p: 2 }}>
            {(course.progress === null || course.progress === undefined || course.progress === 0) ? '0' : course.progress}%
            <LinearProgress determinate value={course.progress} />
          </Stack>
          <Link to={`/course/${course.id}`}>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              {course.progress === 0 ? "Start" : (course.progress === 100 ? "Restart" : "Continue")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;