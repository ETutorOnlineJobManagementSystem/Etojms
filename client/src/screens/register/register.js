import React, { useState } from 'react';
import log from '../../images/log.jpg'; // Replace with the path to your background image
import { FaGraduationCap } from "react-icons/fa";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default to student

  // Error state for input fields
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [LoginSuccessful, setLoginSuccessful] = useState('');

  const handleSubmit = (e) => {
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

    if (!firstName) {
      setFirstNameError('First name is required');
      isValid = false;
    }

    if (!lastName) {
      setLastNameError('Last name is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm password');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      // Handle form submission here
      console.log('Form submitted successfully');
      setLoginSuccessful('Registration Successful');
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
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`w-full px-3 py-2 placeholder-gray-500 border ${firstNameError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                {firstNameError && <span className="text-red-500 text-sm">{firstNameError}</span>}
              </label>
              <label>
                Last Name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`w-full px-3 py-2 placeholder-gray-500 border ${lastNameError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                {lastNameError && <span className="text-red-500 text-sm">{lastNameError}</span>}
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-3 py-2 placeholder-gray-500 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
              </label>
              <label>
                Set Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-3 py-2 placeholder-gray-500 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
              </label>
              <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`w-full px-3 py-2 placeholder-gray-500 border ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} />
                {confirmPasswordError && <span className="text-red-500 text-sm">{confirmPasswordError}</span>}
              </label>
              <label>
                User:
                <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                </select>
              </label>
            </div>
            {LoginSuccessful && <p className="text-green-600 text-sm mt-2">{LoginSuccessful}</p>}
            <button type="submit" className="block w-full py-2 mt-6 bg-blue-600 hover:bg-blue-400 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
