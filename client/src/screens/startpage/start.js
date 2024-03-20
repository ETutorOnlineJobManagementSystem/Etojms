import React from 'react';
import NavBar from '../components/navbar';
import CourseCard from '../components/cardbox';
import FeaturedTopicsPage from '../components/featuredtopics';
import Footer from '../components/footer';

const StartPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>

      <div className="flex-grow">
        <h1 className='text-left px-4 py-4 text-3xl font-bold'> Top courses</h1>
        <div className='mt-5 flex justify-between'> 
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </div>
      
      <FeaturedTopicsPage/>
      <Footer/>
    </div>
  )
}

export default StartPage;
