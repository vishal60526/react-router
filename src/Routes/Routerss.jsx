import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';
import About from '../components/about/About';
import Contact from '../components/header/contact/Contact';
import Github from '../components/github/Github';
function Routerss() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/github' element={<Github />} />
        </Route>

      </Routes>
    </div>
  )
}

export default Routerss;
