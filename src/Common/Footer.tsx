import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';
import logo from '../Assests/image/3I9xJ0Mrmv.gif'

const Footer = () => {


  return (
    <AppBar  position="static" className='footer'>
      <Container>
        <Toolbar>
            <Grid className='content-row'>
                <img src={logo} height={60} width={60}/>
      
            <Typography variant='h6' className='font_ShopName' >Cinema Gate</Typography>
          
           
            </Grid>
       
          
        </Toolbar>
        <Typography className="label_end">
            &copy; {new Date().getFullYear()}Cinema Gate. All rights reserved.
          </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
