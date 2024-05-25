import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./views/AboutUs/AboutUs";
import ContactUs from "./views/ContactUs/ContactUs";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
