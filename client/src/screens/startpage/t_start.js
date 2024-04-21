import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const TutorHomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="logo">
          <h1 className="text-2xl font-bold text-blue-600">eTutor</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md">Login</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Welcome, Tutors!</h2>
        <p className="text-lg text-gray-700">Join our platform and start sharing your knowledge with students worldwide.</p>
        <Link to="/dashboard" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500">Open Dashboard</Link>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Why Choose eTutor?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li>
            <h4 className="font-bold text-lg">Flexible Schedule</h4>
            <p>Set your own tutoring hours according to your availability.</p>
          </li>
          <li>
            <h4 className="font-bold text-lg">Earn Money</h4>
            <p>Get paid for sharing your expertise with students.</p>
          </li>
          <li>
            <h4 className="font-bold text-lg">Access Resources</h4>
            <p>Get access to teaching materials and resources to enhance your tutoring sessions.</p>
          </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <ol className="space-y-4">
          <li>
            <h4 className="font-bold">Sign Up</h4>
            <p>Create your tutor account by providing necessary details.</p>
          </li>
          <li>
            <h4 className="font-bold">Create Profile</h4>
            <p>Complete your profile with your expertise, education, and availability.</p>
          </li>
          <li>
            <h4 className="font-bold">Start Tutoring</h4>
            <p>Once approved, start tutoring students in your preferred subjects.</p>
          </li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600">
        <p className="mb-2">Contact Us: support@etutor.com | Phone: 123-456-7890</p>
        <p>&copy; 2024 eTutor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TutorHomePage;
