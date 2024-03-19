import React from 'react'
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox';

const StartPage = () => {
  return (
    <>
    <NavBar/>
    <div className='mt-5 flex justify-between'>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    </div>
    
    </>
  )
}

export default StartPage;