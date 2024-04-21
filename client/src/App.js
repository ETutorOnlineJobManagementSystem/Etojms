import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import StartPage from "./screens/startpage/start";
import Login from "./screens/login/login";
import './App.css';
import Register from "./screens/register/register";
import Forgetpassword from "./screens/components/forgetpassword";
import Reset from "./screens/components/resetpassword";
import Cart from "./screens/components/cart";
import NotificationPage from "./screens/components/notification";
import SessionsPage from "./screens/components/sessions";
import Enroll from "./screens/components/enroll";
import CourseCard from "./screens/components/cardbox";
import PaymentPage from "./screens/components/payment";
import ThanksPage from "./screens/components/thanks";
import LoginPage from "./screens/firstpage/users";
import Tutor from "./screens/login/tutorlogin";
import Tutor_Register from "./screens/register/tutor_register";
import TutorHomePage from "./screens/startpage/t_start";
import TutorDashboard from "./screens/components/dashboard";
import ProfilePage from "./screens/tutor/profile_edit";
import Lesson from "./screens/tutor/lesson_mat";
import { Info, Analytics, MaterialCard, MaterialPreview, MaterialList, SearchBar, FilterOptions, FolderTree, UploadButton } from "./screens/tutor/info.js";

const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
      <Route path="/" Component={LoginPage}/>
      <Route path="*" element={<Navigate replace to={"/"} />} />    
        <Route path="/start" Component={StartPage}/>
       <Route path="/tutorlogin" Component={Tutor}/>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/forgetpassword" Component={Forgetpassword}/>
        <Route path="/reset" Component={Reset}/>
        <Route path="/cart" Component={Cart}/>
        
        <Route path="/notifications" Component={NotificationPage}/>
        <Route path="/sessions" Component={SessionsPage}/>
        <Route path="/" element={<CourseCard />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/payment" Component={PaymentPage}/>
        <Route path="thanks" Component = {ThanksPage}/>
        <Route path="tutor_register" Component={Tutor_Register}/>
        <Route path="t_start" Component={TutorHomePage}/>
        <Route path="dashboard" Component={TutorDashboard}/>
        <Route path="lesson_mat" Component={Lesson}/>
        <Route path="profile_edit" Component={ProfilePage}/>
        <Route path="info" Component={Info}/>
        <Route path="info" Component={Analytics}/>
        <Route path="info" Component={MaterialCard}/>
        <Route path="info" Component={MaterialList}/>
        <Route path="info" Component={MaterialPreview}/>
        <Route path="info" Component={SearchBar}/>
        <Route path="info" Component={FilterOptions}/>
        <Route path="info" Component={FolderTree}/>
        <Route path="info" Component={UploadButton}/>
      </Routes>
    </>
  );
};

export default App;