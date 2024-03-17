const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});
require('./db/conn');


const middleware = (req,res,next) =>{
    console.log('my middle ware');
    //next();
}
middleware();

app.get('/',(req,res) => {
    res.send('Hello world from the server')
});
app.get('/courses',(req,res) => {
    res.send('courses from the server')
});
app.get('/sessions',middleware,(req,res) => {
    res.send('sessions from the server')
});
app.get('/mylearning',middleware,(req,res) => {
    res.send('my learning from the server')
});
app.get('/payments',middleware,(req,res) => {
    res.send('payments from the server')
});
app.get('/login',(req,res) => {
    res.send('login from the server')
});
app.get('/register',(req,res) => {
    res.send('register from the server')
});

app.listen(5000, () =>{
    console.log(`Server is running on port 5000`);
})