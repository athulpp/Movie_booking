import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Common/Header';
import { Grid, Typography } from '@mui/material';
const Booke_show = () => {
    const bookList = useSelector((state:any) => state?.bookedList);
    const [sortedResponse, setSortedResponse] = useState([]);
 const userDetails=useSelector((state:any)=>state?.form.user)
   console.log(userDetails,'userDetails');

    const jsonString = JSON.stringify(bookList);



console.log(sortedResponse);
  return (
    <div>
      <Header/>
      <Grid className='content-height'></Grid>
      <Grid container xs={12} sm={12} md={12}>
        <Grid className='content-height'></Grid>
        <Grid item xs={6} sm={4} sx={{'border':'2px solid #ccc', marginLeft:'2rem'}} >
          <div className='centered-image-container'>       <img src={userDetails.image} height={100} width={100} /></div>

        <Typography variant='h4' className='content-row'>Profile</Typography>
        <Grid className='content-height'></Grid>
        <Grid className='content-row space_between'>
        <Typography variant='h6'>Name</Typography>
        <Typography variant='h6'>{userDetails.name}</Typography>
        </Grid>
        <Grid className='content-row space_between'>
        <Typography variant='h6'>Last Name</Typography>
        <Typography variant='h6'>{userDetails.last_name}</Typography>
        </Grid>
        <Grid className='content-row space_between'>
          <Typography variant='h6'>Email</Typography>
          <Typography variant='h6'>{userDetails.email}</Typography>
        </Grid>
        <Grid className='content-row space_between'>
          <Typography variant='h6'>Phone</Typography>
          <Typography variant='h6'>{userDetails.phone}</Typography>
        </Grid>
     
        </Grid>
        <Grid item xs={6}>

        </Grid>

      </Grid>
     

    </div>
  )
}

export default Booke_show