import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { NavCom } from "./Components/NavCom";
import { FooterCom } from "./Components/FooterCom";

import { Home } from "./Page/Home";
import { Works } from "./Page/Works";
import { About } from "./Page/About";
import { Contacts } from "./Page/Contacts";
import NotFound404 from "./Page/NotFound404";
import SecretPage from "./Page/SecretPage";
import GlitchPage from "./Page/GlitchPage";
import Register from "./Page/Register";
import Login from "./Page/Login";
import Dashboard from "./Page/Dashboard.jsx";

import LoadingScreen from "./Components/LoadingScreen";
import ScrollToTopButton from "./Components/ScrollToTopButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router className="App">
      <NavCom />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />

        <Route path="/1234567890" element={<SecretPage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/glitch" element={<GlitchPage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <FooterCom />

      <ScrollToTopButton />
    </Router>
  );
}

export default App;
