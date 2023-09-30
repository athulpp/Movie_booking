import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import movieLogo from '../Assests/image/3I9xJ0Mrmv.gif'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../Redux/actions';
const Header = () => {
    const userDetails=useSelector((state:any)=>state?.form.user);
    console.log(userDetails,'full user details is here');
    const dispatch=useDispatch();

    const navigate=useNavigate();
const Logout=()=>{
    dispatch(logoutUser());
    navigate('/');
}
  return (

    <AppBar  position="static" sx={{ backgroundColor: "black" }}>
    <Toolbar>
        <img
        height={50}
        src={movieLogo}
        />
        <Typography variant='h5'>{`Hello ${' '} ${userDetails.name}`}</Typography>
        <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit" onClick={()=>Logout()}>Logout</Button>
    </Toolbar>
</AppBar>
  )
}

export default Header