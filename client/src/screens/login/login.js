// Login.js
import React, { useState } from 'react';
import log from '../../images/log.jpg'; 
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import Alert from './Alert'; 
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [login_user,setUser] = useState(
    {
      email:"",
      password:"",
    }
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login_user.email && !login_user.password) {
      setAlertMessage('Please enter all details');
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage("");
    }, 2000);
    } else if (!login_user.email) {
        setAlertMessage('Please enter email to continue');
        setAlertType('error');
        setTimeout(() => {
          setAlertMessage("");
      }, 2000);
    } else if (!isValidEmail(login_user.email)) {
      setAlertMessage('Please enter a valid email');
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage("");
    }, 2000);
    } else if (!login_user.password) {
        setAlertMessage('Please enter a password to continue');
        setAlertType('error');
        setTimeout(() => {
          setAlertMessage("");
      }, 2000);
    } else if (!isValidPassword(login_user.password)) {
      setAlertMessage('Please enter a valid password (minimum 6 characters)');
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage("");
    }, 2000);
    } else {
      try{
        const res = await axios.post("http://localhost:5000/login",login_user);
        console.log(res.data);
        setAlertMessage("Login Succesful");
        navigate('/start');
        Cookies.set('token',res.data.token);
      }   
      catch(error){
        setMessage("Invalid Credentials");
       console.error("Registration error",error);
       setTimeout(() => {
        setMessage("");
    }, 2000);
      }  
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isValidPassword = (password) => {
    return password.length >= 6;
  }

  const handlePasswordClick = () => {
    // Redirect to password reset page
    window.location.href = '/forgetpassword'; // Change '/forgetpassword' to your actual password reset page URL
  };

  const handleRegisterClick = () => {
    window.location.href = '/register';
  }

  return (
    <>
      <div style={{ backgroundImage: 'url(' + log + ')', height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat' }} className="flex justify-center items-center bg-cover">
        <div className="bg-white p-10 rounded-lg shadow-2xl">
          <div className='flex items-center'>
            <div>
                <FaGraduationCap className='text-xl'/>
            </div>
            <div className='ml-1'>
              <h1 className="text-sm">VLEARN</h1>
            </div>
          </div>
          {alertMessage && <Alert message={alertMessage} type={alertType} />}
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-8">Student Login</h1>
            <label className="block mb-3">
              Email:
              <input type="email" name="email" value={login_user.email} onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </label>
            <label className="block mb-3">
              Password:
              <input type="password" name="password" value={login_user.password} onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </label>
            <div className='flex'>
                <input type="checkbox" className="mr-1" />
                <label className="text-sm flex items-center">
                  Remember me
                </label>
              </div>

              <div className='mt-3'>
                <div className='flex items-center justify-between'>
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer" onClick={handlePasswordClick}>
                    Forgot Password?
                  </span>
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer" onClick={handleRegisterClick}>
                    Register
                  </span>
                </div>
              </div>
            
            <button type="submit" className="block w-full py-2 mt-6 bg-blue-600 hover:bg-blue-400 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
