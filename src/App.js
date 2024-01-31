import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SingUp from "./components/singUp/SingUp";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";
import Provider from "./components/provider/Provider";
import Navbar from "./components/navbar/Navbar";
import Sliders from "./components/Sliders";
import AddEventData from "./components/provider/AddEventData";
import EventPage from "./components/eventCads/EventPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/addEventData" element={<AddEventData />} />
        <Route path="/detail/:productId" element={<EventPage />} />
        <Route path="/about" element={<Sliders />} />
        <Route path="*" element={<div>404 page not found</div>} />
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
