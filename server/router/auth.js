const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send('Hello world from the server')
});

//using promises
// router.post('/register',(req,res) =>{
//     const  {firstname,lastname,email,password,cpassword,usertype} = req.body;
//     if(!firstname || !lastname || !email || !password || !cpassword || !usertype){
//         return res.status(422).json({error:"please fill all the fields properly"})
//     }
//     User.findOne({ email : email })
//         .then((userExists) => {
//             if(userExists){
//             return res.status(422).json({error:"Email already exists"});
//         }
//             const user = new User({firstname,lastname,email,password,cpassword,usertype});
//             user.save().then(() => {
//                 res.status(201).json({message: "user registered succesfully"});
//             }).catch((err) => res.status(500).json({error :"Failed to register"}));

//     }).catch(err => {console.log(err); });
// });
//using async wait

router.post('/register', async (req,res) =>{
    const  {firstname,lastname,email,password,cpassword,usertype} = req.body;
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



router.post('/login', async (req,res) => {
    // console.log(req.body);
    //res.json({message:"awesome!!!"});
    try{
        let token;
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json("please fill the detils");
        }
        const userLogin = await User.findOne({email:email});

        //console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);
        if(!isMatch){
            res.status(400).json({error: "Invalid credentials"});
        }else{
            res.json({message: "User logged in succesfully!!"});
        }
        }else{
            res.status(400).json({error: "Invalid credentials"});
        }
        
    }catch(err){
        console.log(err);
    }
});

module.exports = router;