// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();

    const handleclick=()=>{
    navigate('/login');
}
const clickhandle=()=>{
    navigate('/tutorlogin')
}
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('https://wallpaperaccess.com/full/3239480.jpg')`}}> {/* Replace 'background-image.jpg' with the path to your background image */}
    <h1 className="text-5xl font-bold mb-8 text-white">E-TUTOR</h1>
      <div className="flex">
        {/* Student Login Form */}
        <form className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 mr-4">
          <img src="https://seecs.nust.edu.pk/wp-content/uploads/2020/06/studentconcern-icon.png" alt="Student" className="w-20 h-20 mb-4" /> {/* Replace 'student-image.jpg' with the path to your student image */}
          <h2 className="text-xl font-bold mb-4">Student Login</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleclick}>Login as Student</button>
        </form>
        {/* Tutor Login Form */}
        <form className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 mr-4">
          <img src="https://www.mtsac.edu/asac/images/templogo_tutortraining.png" alt="Tutor" className="w-20 h-20 mb-4" /> {/* Replace 'tutor-image.jpg' with the path to your tutor image */}
          <h2 className="text-xl font-bold mb-4">Tutor Login</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={clickhandle}>Login as Tutor</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
