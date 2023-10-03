import React,{useEffect} from 'react'
import Header from '../../Common/Header';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CustomCarousel from '../../Common/AdvertismentCarousal';
import { Grid } from '@mui/material';
import adv1 from '../../Assests/image/ad_image/slug-navratri-collection-202309251241.jpg';

const HomeScreen = () => {
  const userIsLoggedIn = useSelector((state:any) => state?.userReducer.userIsLoggedIn);

  console.log(userIsLoggedIn,'hyyyyyhhh') 
const navigate=useNavigate();
  useEffect(()=>{
if(!userIsLoggedIn){
  navigate('/');
}
  },[])

  return (
    <div><Header/>
    <Grid className='content-height'></Grid>
   <CustomCarousel/>
<Grid className='content-height'></Grid>
<Grid container xs={12}>
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
  {/* film list mapping going to implement here */}
</Grid>

    </div>
  )
}

export default HomeScreen;