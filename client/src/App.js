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
const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" Component={StartPage}/>
        <Route path="*" element={<Navigate replace to={"/"} />} />       
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/forgetpassword" Component={Forgetpassword}/>
        <Route path="/reset" Component={Reset}/>
        <Route path="/cart" Component={Cart}/>
        <Route path="/notifications" Component={NotificationPage}/>
        <Route path="/sessions" Component={SessionsPage}/>
      </Routes>
    </>
  );
};

export default App;