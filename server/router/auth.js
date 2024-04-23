require('dotenv').config(); // Load environment variables
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//require('../db/conn'); // Assuming this connects to your database
const jwtSecretKey = "your_secret_key_here";
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send('Hello world from the server')
});
router.post('/register', async (req,res) =>{
    const  {firstname,lastname,email,password,cpassword,usertype} = req.body;
    console.log(req.body);
    if(!firstname || !lastname || !email || !password || !cpassword || !usertype){
        return res.status(422).json({error:"please fill all the fields properly"})
    }
    try{
        const userExists = await User.findOne({ email : email });
        if(userExists){
            return res.status(422).json({error:"Email already exists"});
        } else if(password!= cpassword){
            return res.status(422).json({error:"Password and confirm passwords do not match"});
        }else{
            const user = new User({firstname,lastname,email,password,cpassword,usertype});
            await user.save();
            res.status(201).json({message: "user registered succesfully"});           
        }
        
    }catch(err){
        console.log(err);
    }
});



router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json("Please fill in your email and password."); // More specific message
      }
  
      const userLogin = await User.findOne({ email });
  
      if (!userLogin) {
        return res.status(400).json({ error: "Invalid email or password." }); // More specific message
      }
  
      const isMatch = await bcrypt.compare(password, userLogin.password);
  
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid email or password." }); // More specific message
      }
  
      const token = jwt.sign({ _id: userLogin._id }, process.env.JWT_SECRET);
  
      res.cookie("token", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
  
      res.json({ message: "User logged in successfully!", token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" }); // Consider more specific messages
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
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  router.post('/resetpassword', async (req,res) =>{
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
        console.error(err);
        res.status(500).json({ error: "Server error" });
      }
    });
  
  module.exports = router;