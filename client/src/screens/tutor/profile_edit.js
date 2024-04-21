import React, { useState } from 'react';

const ProfileInformation = ({ profile, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateProfile(newProfile);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
      <div className="flex">
        <div className="mb-4">
          <img src={newProfile.image} alt="Profile" className="w-20 h-20 rounded-full mr-4" />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                const imageData = reader.result;
                setNewProfile({ ...newProfile, image: imageData });
              };
            }}
          />
        </div>
        <div>
          <p className="mb-4">
            <span className="font-semibold">First Name:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="fname"
                value={newProfile.fname}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.fname
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Last Name:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="lname"
                value={newProfile.lname}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.lname
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email:</span>{' '}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={newProfile.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.email
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Mobile:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={newProfile.mobile}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.mobile
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Education:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="edu"
                value={newProfile.edu}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.edu
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Marital Status:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="mar"
                value={newProfile.mar}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.mar
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="add"
                value={newProfile.add}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.add
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Achievements:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="acheive"
                value={newProfile.acheive}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.acheive
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Availability Time:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="time"
                value={newProfile.time}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.time
            )}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Salary:</span>{' '}
            {isEditing ? (
              <input
                type="text"
                name="salary"
                value={newProfile.salary}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            ) : (
              newProfile.salary
            )}
          </p>
        </div>
      </div>
      {isEditing ? (
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleEdit}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Edit
        </button>
      )}
    </div>
  );
};

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fname: 'Aditya',
    lname: 'Kantiboina',
    sex: 'M',
    email: 'adityakantiboina9@gmail.com',
    mobile: '8464880260',
    edu: 'Btech CSE',
    mar: 'Single',
    add: 'Kakinada, Andhra Pradesh',
    acheive: '',
    time: '9 am - 7 pm',
    salary: 'Rs/- 30,000',
    image: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const handleUpdateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <ProfileInformation profile={profile} onUpdateProfile={handleUpdateProfile} />
    </div>
  );
};

export default ProfilePage;
