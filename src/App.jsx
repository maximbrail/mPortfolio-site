import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

import { NavCom } from './Components/NavCom';
import { HeaderCom } from './Components/HeaderCom';
import { MainCom } from './Components/MainCom';
import { FooterCom } from './Components/FooterCom';


import { Home } from './Page/Home'
import { Works } from './Page/Works';
import { Comparision } from './Page/Comparision';
import { Skills } from './Page/Skills';
import { About } from './Page/About';
import { Contact } from './Page/Contact';



function App() {
  return (
    <Router className="App">

      <NavCom />

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element={<Works />} />
      <Route path='/comparision' element={<Comparision />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={ <Contact/> } />
      </Routes>

      
      <FooterCom />

    </Router>


  );
}

export default App;
