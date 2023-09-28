import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../Screens/Login/login';
import HomeScreen from '../Screens/Home/HomeScreen';

const Approutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Approutes;