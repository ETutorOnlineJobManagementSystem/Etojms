import React from 'react';
import { Link } from 'react-router-dom';
import TutorNavBar from '../components/t_navbar';

const TutorHomePage = () => {
  return (
    <>
      <TutorNavBar />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome, Tutors!</h2>
          <p className="text-lg text-gray-700 mb-6">Join our platform and start sharing your knowledge with students worldwide.</p>
          <Link to="/dashboard" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out">Open Dashboard</Link>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Why Choose eTutor?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="flex flex-col items-center">
              <h4 className="font-bold text-lg mb-2">Flexible Schedule</h4>
              <p className="text-gray-700">Set your own tutoring hours according to your availability.</p>
            </li>
            <li className="flex flex-col items-center">
              <h4 className="font-bold text-lg mb-2">Earn Money</h4>
              <p className="text-gray-700">Get paid for sharing your expertise with students.</p>
            </li>
            <li className="flex flex-col items-center">
              <h4 className="font-bold text-lg mb-2">Access Resources</h4>
              <p className="text-gray-700">Get access to teaching materials and resources to enhance your tutoring sessions.</p>
            </li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">1</div>
              <div>
                <h4 className="font-bold">Sign Up</h4>
                <p>Create your tutor account by providing necessary details. <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">2</div>
              <div>
                <h4 className="font-bold">Create Profile</h4>
                <p>Complete your profile with your expertise, education, and availability. <Link to="/tprofile" className="text-blue-600">Create Profile</Link></p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">3</div>
              <div>
                <h4 className="font-bold">Start Tutoring</h4>
                <p>Once approved, start tutoring students in your preferred subjects.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600">
          <p className="mb-2">Contact Us: support@etutor.com | Phone: 123-456-7890</p>
          <p>&copy; 2024 eTutor. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default TutorHomePage;
