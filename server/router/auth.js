require('dotenv').config();
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/userSchema');
const Tutor = require('../model/tutorSchema'); // Assuming you have a tutor schema
const Enrollment = require('../model/enrollSchema');

// const { requireAuth } = require('../router/middle');

//Get user data based on token
router.get('/user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token,process.env.JWT_SECRET);
  try {
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Send user data without sensitive information like password
    const userData = {
      firstname: user.firstname,
      email: user.email,
      // Add other fields as needed
    };
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', (req, res) => {
  res.send('Hello world from the server');
});

router.post('/register', async (req, res) => {
  const { firstname, lastname, email, password, cpassword, usertype } = req.body;
  console.log(req.body);
  if (!firstname || !lastname || !email || !password || !cpassword || !usertype) {
    return res.status(422).json({ error: "Please fill all the fields properly" });
  }
  try {
    let user;
    if (usertype === 'tutor') {
      user = await Tutor.findOne({ email });
    } else {
      user = await User.findOne({ email });
    }

    if (user) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password and confirm passwords do not match" });
    } else {
      const newUser = usertype === 'tutor' ? new Tutor({ firstname, lastname, email, password, usertype }) : new User({ firstname, lastname, email, password, usertype });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user;
    if (req.body.usertype === 'tutor') {
      user = await Tutor.findOne({ email });
    } else {
      user = await User.findOne({ email });
    }

    if (!user) {
      return res.status(400).json({ success: false, message: 'User does not exist with this email' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ success: false, message: 'Incorrect password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('accessToken', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 3600000), // 1 hour expiration
    }).status(200).json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.post('/forgetpassword', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Email not found." });
    }

    res.status(200).json({ message: "Email found. Redirect to reset page." });
  } catch (err) {
    console.error('Error during forget password:', err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/resetpassword', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ error: "Email and new password are required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Email not found." });
    }

    // Update user's password
    user.password = newPassword;
    await user.save();

    res.json({ message: "Password updated successfully." });
  } catch (err) {
    console.error('Error during reset password:', err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/enroll', async (req, res) => {
  try {
    const { user,courseName, courseDetails, courseType, slotTiming, agreed } = req.body;
 
    const newEnrollment = new Enrollment({
      user,
      courseName,
      courseDetails,
      courseType,
      slotTiming,
      agreed,
    });

    await newEnrollment.save();
    res.status(201).json({ message: 'Enrollment saved successfully' });
  } catch (error) {
    console.error('Error saving enrollment:', error);
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(422).json({ error: validationErrors });
    } else {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
});

User.prototype.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

Tutor.prototype.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
module.exports = router;
