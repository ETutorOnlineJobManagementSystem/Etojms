import React, { useState } from 'react';
import log from '../../images/log.jpg'; // Replace with the path to your background image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <>
        <div style={{ backgroundImage: `url(${log})`, height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat' }} className="flex justify-center items-center bg-cover">
        <div className="bg-white p-10 rounded-lg shadow-2xl">
            <div className='flex'>
                <div>

                </div>
                <div>
                <h1 className="text-sm">VLEARN</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <label className="block mb-3">
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </label>
            <label className="block mb-3">
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </label>
            <div className='flex'>
                <div>
                    <input type="checkbox"/>
                </div>
                <div className='ml-2'>
                    <h1 className='text-sm'>Remember me</h1>
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
