import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TutorProfilePage = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    expertise: '',
    education: '',
    availability: '',
    qualifications: '',
    profession: '',
    // Add more fields as needed
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to server
    console.log(formData);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">Create Your Tutor Profile</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="expertise" className="block text-gray-700 font-semibold mb-2">Expertise</label>
          <input type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="education" className="block text-gray-700 font-semibold mb-2">Education</label>
          <input type="text" id="education" name="education" value={formData.education} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="availability" className="block text-gray-700 font-semibold mb-2">Availability</label>
          <input type="text" id="availability" name="availability" value={formData.availability} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="qualifications" className="block text-gray-700 font-semibold mb-2">Qualifications</label>
          <input type="text" id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="profession" className="block text-gray-700 font-semibold mb-2">Profession</label>
          <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" required />
        </div>
        <div className="mb-6">
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out">Save Profile</button>
        </div>
      </form>
      <p>Already have a profile? <Link to="/dashboard" className="text-blue-600">Go back to Dashboard</Link></p>
    </div>
  );
};

export default TutorProfilePage;
