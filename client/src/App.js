import React from "react";
import {  Route, Routes, Navigate  } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import StartPage from "./screens/startpage/start";
import Login from "./screens/login/login";
import './App.css';
import Homepage from "./screens/homepage/homepage";
const App = () => {
  return (
    <>
    {/* <AppBar/> */}
      <Routes>
        <Route path="/" Component={StartPage}/>
        <Route path="*" element={<Navigate replace to={"/"} />} />       
        <Route path="/login" Component={Login}/>
        <Route path="/home" Component={Homepage}/>
      </Routes>
    </>
  );
};

export default App;