import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../context/CourseContext';

const PaymentPage = () => {
  const { enrollingCourse, enrolledCourses, setEnrolledCourses } = useCourseContext()
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    // Handle payment processing
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions before proceeding.");
      return;
    }

  };

  const handleClick = () => {
    if (agreeTerms) {
      setEnrolledCourses([...enrolledCourses, { ...enrollingCourse, progress: 0, id: uuidv4() }])
      navigate('/thanks');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center" style={{ backgroundImage: `url('https://wallpaperaccess.com/full/4597136.jpg')`}}>
      <div className="max-w-md bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-blue text-center mb-8">Payment</h1>
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-blue font-semibold mb-2">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div>
              <label htmlFor="expiryDate" className="block text-blue font-semibold mb-2">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-blue font-semibold mb-2">CVV</label>
              <input
                type="password"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="CVV"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue font-semibold mb-2">Cardholder Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter cardholder name"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="agreeTerms" className="text-blue">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300" onClick={handleClick}>Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;