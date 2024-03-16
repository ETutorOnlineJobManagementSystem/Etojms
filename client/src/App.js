import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import StartPage from "./screens/startpage/start";
import Login from "./screens/login/login";
import './App.css';
import Register from "./screens/register/register";
const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" Component={StartPage}/>
        <Route path="*" element={<Navigate replace to={"/"} />} />       
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </>
  );
};

export default App;