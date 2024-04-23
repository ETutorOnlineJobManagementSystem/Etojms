import React from 'react';

const TutorNotificationsPage = () => {
  // Define an array of notifications
  const notifications = [
    {
      type: 'payment',
      message: 'You have received a payment of $100 for the Java Programming class.',
      date: 'April 23, 2024'
    },
    {
      type: 'reminder',
      message: 'Reminder: Your Python Programming class is scheduled tomorrow.',
      date: 'April 24, 2024',
      time: '10:00 AM - 12:00 PM'
    }
    // Add more notifications as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-md w-full">
        <h1 className="text-3xl font-bold mb-4">Notifications</h1>

        {/* Map over notifications and render each one */}
        {notifications.map((notification, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{notification.type === 'payment' ? 'Payment Received' : 'Class Reminder'}</h2>
            <div className={`bg-${notification.type === 'payment' ? 'green' : 'blue'}-100 border-l-4 border-${notification.type === 'payment' ? 'green' : 'blue'}-500 text-${notification.type === 'payment' ? 'green' : 'blue'}-700 p-4 rounded-md`}>
              <p className="text-lg">{notification.message}</p>
              <p className="text-sm mt-2">Date: {notification.date}</p>
              {notification.time && <p className="text-sm">Time: {notification.time}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorNotificationsPage;
