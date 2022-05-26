import React from 'react';
import './index.css';
import Navbar from './Restaurant/Navbar';
import Footer from "./Restaurant/Footer";
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart';
import List from './Restaurant/List';
import About from './About/About';
import Contact from './Contact/Contact';


function App() {
  return (<>
    <Navbar />
    <div className='main3'>
      <Routes>
        <Route exact path='/' element={<List />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </>
  )
}

export default App

