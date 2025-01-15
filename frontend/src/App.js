import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import ContactUs from "./pages/ContactUs/ContactUs";
import Subscription from "./pages/Subscription/Subscription";
import HappyClients from "./components/HappyClients/HappyClients";
import "./styles/theme.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/Navbar/ThemeToggle";
import Notfound from "./components/NotFound/Notfound";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ThemeProvider>
      <>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/contactus" element={<ContactUs />} />
            {/* <Route path="*" element={<Notfound />} /> */}
          </Routes>
          <HappyClients />
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
