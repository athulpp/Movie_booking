import React,{useEffect,useState} from 'react'
import Header from '../../Common/Header';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CustomCarousel from '../../Common/AdvertismentCarousal';
import { Grid, Paper, Typography } from '@mui/material';
import adv1 from '../../Assests/image/ad_image/slug-navratri-collection-202309251241.jpg';
import theaterData from '../../Jsons/theater.json';
import Footer from '../../Common/Footer';
const HomeScreen = () => {
  const userIsLoggedIn = useSelector((state:any) => state?.userReducer.userIsLoggedIn);

  console.log(userIsLoggedIn,'hyyyyyhhh') 
const navigate=useNavigate();
  useEffect(()=>{
if(!userIsLoggedIn){
  navigate('/');
}
  },[])


  const onClickMovie=(data:any)=>{
console.log(data,'selected film');

  }


  return (
    <div style={{backgroundColor:'#ECF2FF'}}><Header/>
    <Grid className='content-height'></Grid>
   <CustomCarousel/>
<Grid className='content-height'></Grid>
<Grid >
<Grid container  xs={12}>
  <Grid item xs={12} md={12} sm={12} className='content-row'>
    <Grid xs={1}></Grid>
    <img
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%', 
        height: 'auto',  
      }}
      src={adv1}
      alt="Ad Image"
    />
    <Grid xs={1}></Grid>
  </Grid>
</Grid>
<Grid className='content-height'></Grid>
{theaterData.map((item) => (
        <div 
        key={item.id}>
          <Typography variant="h5" align="center">
            {item.name}
          </Typography>
          <div
         className='wrapper'
        
          >
            {item.films.map((film:any) => (
              <div  className='select' >
              <div onClick={()=>onClickMovie(film)}>
              <img
              className='item'
                key={film.id}
                src={film.image}
                alt={film.title}
              style={{borderRadius:"40px"}}
              />


              </div>
              <Grid className='content-row_withoutPad space_between'>
              <Typography variant='h6'>{film.title}</Typography>
              <Typography className='font-golden' >{film.rating}</Typography>
              </Grid>
              </div>
            ))}
          </div>
          
        </div>
      ))}
      </Grid>
<Grid className='content-height'></Grid>

<Footer/>
    </div>
  )
}

export default HomeScreen;