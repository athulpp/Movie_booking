import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Common/Header';
const Sucess_screen = () => {
    const bookList = useSelector((state:any) => state?.bookedList);
    console.log(bookList,'booked data here');  
  return (
    <div>
        <Grid>
            <Header/>
            <Grid className='content-height'></Grid>
            <Grid container xs={12} md={12} sm={12} className='content-row'>
                <Grid item xs={6}>
                    
                  <Typography variant='h5'>Success Your Ticket has been booked!</Typography>  
                </Grid>
            </Grid>

        </Grid>
    </div>
  )
}

export default Sucess_screen