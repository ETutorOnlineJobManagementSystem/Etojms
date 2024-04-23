import React, { useContext } from 'react'

const CourseContext = React.createContext({
    courseName: '',
    setCourseName: Function,
    courseDetails: '',
    setCourseDetails: Function,
    enrollingCourse: {},
    setEnrollingCourse: Function,
    enrolledCourses: [],
    setEnrolledCourses: Function,
    setProgress: Function
})

export const useCourseContext = () => useContext(CourseContext)

export default CourseContext