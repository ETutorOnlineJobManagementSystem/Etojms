import React, { useState } from 'react';
import log from '../../images/log.jpg'; // Replace with the path to your background image
import { FaGraduationCap } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: '',
    usertype: 'student',
  });
  const navigate = useNavigate();

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState('');

  const handlechange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    // Reset errors
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setLoginSuccessful('');

    // Validation
    let isValid = true;

    if (!user.firstname) {
      setFirstNameError('First name is required');
      isValid = false;
    }

    if (!user.lastname) {
      setLastNameError('Last name is required');
      isValid = false;
    }

    if (!user.email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!user.password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!user.cpassword) {
      setConfirmPasswordError('Please confirm password');
      isValid = false;
    }

    if (user.password !== user.cpassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      try {
        const res = await axios.post("http://localhost:5000/register", user);
        console.log(res.data);
        setLoginSuccessful('Registration Successful');
        navigate('/login');
      } catch (error) {
        console.error('Registration Error:', error);
        setLoginSuccessful('Registration Failed');
      }
    }
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${log})`, height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat' }} className="flex justify-center items-center bg-cover">
        <div className="bg-white p-10 rounded-lg shadow-2xl">
          <div className='flex items-center'>
            <div>
              <FaGraduationCap className='text-xl'/>
            </div>
            <div className='ml-1'>
              <h1 className="text-sm">VLEARN</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-8">Register</h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <label>
                First Name:
                <input type="text" name="firstname" value={user.firstname} onChange={handlechange} className= "w-full px-3 py-2 placeholder-gray-500 border ${firstNameError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {firstNameError && <span className="text-red-500 text-sm">{firstNameError}</span>}
              </label>
              <label>
                Last Name:
                <input type="text" name="lastname" value={user.lastname} onChange={handlechange} className="w-full px-3 py-2 placeholder-gray-500 border ${lastNameError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {lastNameError && <span className="text-red-500 text-sm">{lastNameError}</span>}
              </label>
              <label>
                Email:
                <input type="email" name="email" value={user.email} onChange={handlechange} className="w-full px-3 py-2 placeholder-gray-500 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
              </label>
              <label>
                Set Password:
                <input type="password" name="password" value={user.password} onChange={handlechange} className="w-full px-3 py-2 placeholder-gray-500 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
              </label>
              <label>
                Confirm Password:
                <input type="password" name="cpassword" value={user.cpassword} onChange={handlechange} className="w-full px-3 py-2 placeholder-gray-500 border ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {confirmPasswordError && <span className="text-red-500 text-sm">{confirmPasswordError}</span>}
              </label>
              <label>
                User:
                <select value={user.usertype} name="usertype" onChange={handlechange} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="student">Student</option>
                </select>
              </label>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <p>Already Member?</p>
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </div>
            {loginSuccessful && <p className="text-green-600 text-sm mt-2">{loginSuccessful}</p>}
            <button type="submit" className="block w-full py-2 mt-6 bg-blue-600 hover:bg-blue-400 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;