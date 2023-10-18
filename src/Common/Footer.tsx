import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box } from '@mui/material';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from 'react-router-dom';
const Footer = () => {


  return (
    <Box
    component="footer"
    sx={{
      backgroundColor: (theme:any) =>
        
           theme.palette.grey[200],
          //  theme.palette.grey[800],
      p: 6,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography  color="text.primary" gutterBottom className='font_subHeader_bold'>
            About Us
          </Typography>
          <Typography  color="text.secondary" className='font_regular_12px'>
            We are Cinema Gate company, dedicated to providing the best visual and sound experiences to our
            customers.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className='font_subHeader_bold' color="text.primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography className='font_regular_12px' color="text.secondary">
            Padanappalam, Near Passport Seva center,Kannur 670002
          </Typography>
          <Typography className='font_regular_12px' color="text.secondary">
            Email: CinemaGateOffical@cinemagate.com
          </Typography>
          <Typography className='font_regular_12px' color="text.secondary">
            Phone: +0497 -2567856
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography className='font_subHeader_bold' color="text.primary" gutterBottom>
            Follow Us
          </Typography>
          <Link to={''}  color="inherit">
            <Facebook />
          </Link>
          <Link
            to={''}
            color="inherit"
            // sx={{ pl: 1, pr: 1 }}
          >
            <Instagram />
          </Link>
          <Link to={""} color="inherit">
            <Twitter />
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" to={"/home"}>
            Cinema Gate
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  </Box>
  );
};

export default Footer;
