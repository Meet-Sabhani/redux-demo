import React from "react";
import { Route, Routes } from "react-router-dom";
import SingUp from "./components/singUp/SingUp";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import AddEventData from "./components/provider/AddEventData";
import EventPage from "./components/eventCads/EventPage";
import Bookings from "./components/bookings/Bookings";
import Slider from "./components/sliders/Slider";
import GlobalStyle from "./styledCommponets/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      bg: "#fff",
      card: "#EFEFEF",
    },
    media: { mobile: "600px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addEventData/:eventId" element={<AddEventData />} />
        <Route path="/addEventData" element={<AddEventData />} />
        <Route path="/detail/:productId" element={<EventPage />} />
        <Route path="/about" element={<Slider />} />
        <Route path="/bookings" element={<Bookings />} />
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
    </ThemeProvider>
  );
}

export default App;
