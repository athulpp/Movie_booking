import React from 'react'
import {Box, Button, Grid, Paper, TextField, Typography} from '@mui/material'
import './login.scss'
import InputText from '../../Common/Input/InputText';
import { useForm, Controller } from "react-hook-form";
const Login = () => {
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Handle form submission here
    };
  const imageBackground='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc2GzpZmZstLkfmeNs2cxaHmUgaQncFGthA&usqp=CAU';
  return (
    <Box
    className='login_background'
  // sx={{
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundImage:`url(${imageBackground})`
  // }}
    >
       <Paper elevation={4} sx={{ width: 300, margin: "0 auto", padding: 2 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
        <InputText
        className={'input_textField'}
        />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              required
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              // startIcon={<LockIcon />}
            >
              Login
            </Button>
          </form>
          <Box mt={2}>
          </Box>
        </Paper>
    </Box>
       
  )
}

export default Login;