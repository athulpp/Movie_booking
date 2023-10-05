import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../Common/Header'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../../Common/Footer'
import './movie.scss'
import { useNavigate,useLocation } from "react-router-dom";
import ButtonComp from '../../Common/Input/Button'
import { setFormData } from '../../Redux/actions'

const Movie_Detail_screen = () => {
    const location=useLocation();
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const movieData=useSelector((state:any)=>state?.form.movie);
     const seatData=useSelector((state:any)=>state?.form.movieData?.title);
    console.log(movieData,'getting movie data here');

    const navigateToBooking=()=>{
     

            navigate('/seatbook',{state:location.state}); 
      
    
       
    }
  return (
    <Grid container>
        <Header/>
        <Grid className='content-height'></Grid>
        <Grid
  item
  xs={12}
  md={12}
  sm={12}
  className='content-row movie_backgroundImage'
>
  {/* Clear image on top */}
  <Grid
    xs={4}
className='movie_movie_image'
  >
    <img src={movieData?.image} height={'100%'} width={'100%'} style={{borderRadius:'20px'}}   alt="Movie" />
  </Grid>

  <Grid xs={4}>
  <div
className='movie_header'
        >
          <Typography variant="h6">{movieData.title}</Typography>
          <ButtonComp buttonName={'Book Tickets'}
          onClick={()=>navigateToBooking()}
        variant={'contained'}
        customStyle={{backgroundColor:'red',color:"white"}}
        />
        </div>
        <Grid className='content-height'></Grid>
        
  </Grid>

  {/* Blurred background image */}
  <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${movieData?.image})`,
    backgroundSize: 'cover', // Adjust this property as needed
    filter: 'blur(15px)', // Apply a blur effect
  }}
></div>

</Grid>
<Grid className='container-height' style={{paddingBottom:"50px"}}>{'      '}</Grid>
<Typography>About Movie</Typography>
<Grid className='container-height'></Grid>
        <Footer />
    </Grid>
  )
}

export default Movie_Detail_screen