import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../Screens/Login/login';
import HomeScreen from '../Screens/Home/HomeScreen';
import Movie_Detail_screen from '../Screens/Movie Detail/Movie_Detail_screen';
import Booking_Screen from '../Screens/Booking/Booking_Screen';
import Sucess_screen from '../Screens/Sucess/ProfileScreen';
import Booke_show from '../Screens/BookedShow/Booke_show';

const Approutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
      <Route path='/moviedes' element={<Movie_Detail_screen/>}/>
      <Route path='/seatbook' element={<Booking_Screen/>}/>
      <Route path='/success' element={<Sucess_screen/>}/>
      <Route path='/booklist' element={<Booke_show/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Approutes;