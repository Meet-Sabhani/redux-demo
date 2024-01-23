import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SingUp from "./components/singUp/SingUp";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
