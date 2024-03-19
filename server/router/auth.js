const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send('Hello world from the server')
});


router.post('/register',(req,res) =>{
    const  {firstname,lastname,email,password,cpassword,usertype} = req.body;
    if(!firstname || !lastname || !email || !password || !cpassword || !usertype){
        return res.status(422).json({error:"please fill all the fields properly"})
    }
    User.findOne({ email : email })
        .then((userExists) => {
            if(userExists){
            return res.status(422).json({error:"Email already exists"});
        }
            const user = new User({firstname,lastname,email,password,cpassword,usertype});
            user.save().then(() => {
                res.status(201).json({message: "user registered succesfully"});
            }).catch((err) => res.status(500).json({error :"Failed to register"}));

    }).catch(err => {console.log(err); });
});

module.exports = router;