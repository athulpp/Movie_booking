import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import "./login.scss";
import InputText from "../../Common/Input/InputText";
import { useForm } from "react-hook-form";
const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
  };

  const {
    control,
    // formState: { errors },

    getValues,
  } = useForm();

  return (
    <Box className="login_background">
      <Paper elevation={4} sx={{ width: 300, margin: "0 auto", padding: 2,backgroundColor:'#bdbab1' }}>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputText
            control={control}
            name="username" 
            className="input_textField"
            type='text'
            label={'Email'}
            labelStyle={{color:'red',fontSize:'10px'}}
        
          />
          <Grid className="content-height"></Grid>
          <InputText
          control={control}
          name="password"
          className="input_textField"
          type='text'
          label={'Password'}
          labelStyle={{color:'red',fontSize:'10px',textAlign:'center'}}
          />
          {/* <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
          /> */}
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
        <Box mt={2}></Box>
      </Paper>
    </Box>
  );
};

export default Login;
