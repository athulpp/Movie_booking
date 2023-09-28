import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../Screens/Login/login';
const Approutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Approutes;