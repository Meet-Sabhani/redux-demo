import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styledCommponets/GlobalStyle";
import Navbar from "./components/navbar/Navbar";
import { Skeleton } from "antd";
import "driver.js/dist/driver.css";
import Footer from "./components/footer/Footer";

const SingUp = React.lazy(() => import("./components/singUp/SingUp"));
const Login = React.lazy(() => import("./components/login/Login"));
const Home = React.lazy(() => import("./components/home/Home"));
const AddEventData = React.lazy(() =>
  import("./components/addEvent/AddEventData")
);
const EventPage = React.lazy(() => import("./components/eventCads/EventPage"));
const Bookings = React.lazy(() => import("./components/bookings/Bookings"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addEventData/:eventId" element={<AddEventData />} />
          <Route path="/addEventData" element={<AddEventData />} />
          <Route path="/detail/:productId" element={<EventPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="*" element={<div>404 page not found</div>} />
        </Routes>
      </Suspense>
      <Footer />
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
