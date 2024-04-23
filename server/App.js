const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config({path:'./config.env'});
//require('./db/conn');
 
app.use(express.json());
app.use(cors());
app.use(require('./router/auth'));


//onst User = require('.model/userSchema');

mongoose.connect("mongodb+srv://admin-mahendra:Mahendra123@cluster0.l0a5t5v.mongodb.net/Etutor")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// app.get('/',(req,res) => {
//     res.send('Hello world from the server')
// });
// app.get('/courses',(req,res) => {
//     res.send('courses from the server')
// });
// app.get('/sessions',middleware,(req,res) => {
//     res.send('sessions from the server')
// });
// app.get('/mylearning',middleware,(req,res) => {
//     res.send('my learning from the server')
// });
// app.get('/payments',middleware,(req,res) => {
//     res.send('payments from the server')
// });

app.get('/login',(req,res) => {
    res.send('login from the server')
});
app.get('/register',(req,res) => { 
    res.send('register from the server')
});


app.listen(5000,()=>{
    console.log("Listening on port 5000.");

});