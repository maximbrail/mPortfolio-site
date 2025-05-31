import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { NavCom } from './Components/NavCom';
import { FooterCom } from './Components/FooterCom';

import { Home } from './Page/Home'
import { Works } from './Page/Works';
import { About } from './Page/About';
import { Contacts } from './Page/Contacts';
import NotFound404 from "./Page/NotFound404";
import SecretPage from './Page/SecretPage';

import LoadingScreen from './Components/LoadingScreen';

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
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />

        <Route path="/1234567890" element={<SecretPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <FooterCom />
    </Router>
  );
}

export default App;
