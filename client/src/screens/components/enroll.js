import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../context/CourseContext';


const Alert = ({ message, type }) => {
  const alertClasses = {
    error: "bg-red-100 border border-red-400 text-red-700",
    success: "bg-green-100 border border-green-400 text-green-700"
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded text-xl shadow-md ${alertClasses[type]}`}>
      <strong className="font-semibold">{type === 'error' ? 'Error: ' : 'Success: '}</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

const Enroll = () => {
  const navigate = useNavigate();
  const [users, setUserData] = useState(null);
  const { courseName, setCourseName, courseDetails, setCourseDetails } = useCourseContext();
  const [courseType, setCourseType] = useState('live'); // Default to live learning
  const [slotTiming, setSlotTiming] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('token');

      if (!token) return;

      try {
        const response = await axios.get('http://localhost:5000/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    console.log("Enrolled successfully");
    fetchUserData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!agreed) {
      setAlertMessage('Please agree to terms and conditions');
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
    }
    else if (!courseName && !courseDetails) {
      setAlertMessage("Please Enter details");
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
    }
    else if (!courseName) {
      setAlertMessage("Please Enter Course Name");
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
    }
    else if (!courseDetails) {
      setAlertMessage("Please Enter Course Type");
      setAlertType('error');
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
    }
    else {
      const course = {
        user:users.firstname,
        courseName:courseName,
        courseDetails:courseDetails,
        courseType:courseType,
        slotTiming:slotTiming,
        agreed:agreed

      }
      try {
        const res = await axios.post("http://localhost:5000/enroll", course);
        console.log(res.data);
        setAlertMessage('Enrolled Successfully');
        navigate('/payment');
      } catch (error) {
        console.error('Enroll Error:', error);
        setAlertMessage('Enroll Failed');
      }
      console.log(course);
      // axios.post('/api/course', course,{
      //   headers:{
      //     Authorization: `Bearer ${Cookies.get('token')}`
      //   }
      // });
      // Handle successful submission
      setAlertMessage('Payment Page');
      setAlertType('success');
      // Here you can redirect to the payment page
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
      navigate('/payment');
    }
  };

  const handleBack = () => {
    navigate('/start');
  };

  const handleAgreementToggle = () => {
    setAgreed(!agreed);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/001/937/625/original/online-education-application-learning-worldwide-on-phone-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-design-vector.jpg')` }}>
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-8">
        <h2 className="text-xl font-bold mb-4">Enroll in a Course</h2>
        {alertMessage && <Alert message={alertMessage} type={alertType} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="course-name" className="block text-gray-700 font-semibold mb-2">Course Name</label>
            <input
              type="text"
              id="course-name"
              name="course-name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter course name"
              required
              disabled
            />
          </div>
          <div className="mb-4">
            <label htmlFor="course-details" className="block text-gray-700 font-semibold mb-2">Course Details</label>
            <textarea
              id="course-details"
              name="course-details"
              value={courseDetails}
              onChange={(e) => setCourseDetails(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter course details"
              required
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Course Type</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="live"
                name="course-type"
                value="live"
                checked={courseType === 'live'}
                onChange={() => setCourseType('live')}
                className="mr-2"
              />
              <label htmlFor="live" className="mr-4">Live Learning</label>
              <input
                type="radio"
                id="self"
                name="course-type"
                value="self"
                checked={courseType === 'self'}
                onChange={() => setCourseType('self')}
                className="mr-2"
              />
              <label htmlFor="self">Self Learning</label>
            </div>
          </div>
          {courseType === 'live' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Slot Timings</label>
              <select
                value={slotTiming}
                onChange={(e) => setSlotTiming(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Select slot timing</option>
                <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                <option value="Afternoon (2pm - 6pm)">Afternoon (2pm - 6pm)</option>
                <option value="Evening (7pm - 10pm)">Evening (7pm - 10pm)</option>
              </select>
            </div>
          )}
          <div className="mb-4">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              onChange={handleAgreementToggle}
              className="mr-2"
            />
            <label htmlFor="agreement">I agree to terms and conditions</label>
          </div>
          <div className="mb-6 space-x-20">
            <button
              type="button"
              className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 ${!agreed ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={handleSubmit}
              disabled={!agreed}
            >
              Proceed to Payment
            </button>
            <button
              type="button"
              className={'bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'}
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
