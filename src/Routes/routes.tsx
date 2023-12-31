import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from '../Screens/Login/login';
import HomeScreen from '../Screens/Home/HomeScreen';
import Movie_Detail_screen from '../Screens/Movie Detail/Movie_Detail_screen';
import Booking_Screen from '../Screens/Booking/Booking_Screen';
import Sucess_screen from '../Screens/Sucess/Success_Screen';
import Booke_show from '../Screens/Profile/Profile_Screen';
import Theater_Bill_Screen from '../Screens/Theater/Theater_Bill_Screen';
import Theatre_Full_movie from '../Screens/Full movies in Theater/Theatre_Full_movie';

const Approutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/home' element={<HomeScreen/>}/>
      <Route path='/moviedes' element={<Movie_Detail_screen/>}/>
      <Route path='/seatbook' element={<Booking_Screen/>}/>
      <Route path='/success' element={<Sucess_screen/>}/>
      <Route path='/profile' element={<Booke_show/>}/>
      <Route path='/storebill' element={<Theater_Bill_Screen/>}/>
      <Route path='/allmovies'element={<Theatre_Full_movie/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Approutes;