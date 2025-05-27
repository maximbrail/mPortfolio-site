import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { NavCom } from './Components/NavCom';
import { FooterCom } from './Components/FooterCom';

import { Home } from './Page/Home'
import { Works } from './Page/Works';
import { About } from './Page/About';
import { Contacts } from './Page/Contacts';

import LoadingScreen from './Components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 сек загрузки
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
      </Routes>
      <FooterCom />
    </Router>
  );
}

export default App;

