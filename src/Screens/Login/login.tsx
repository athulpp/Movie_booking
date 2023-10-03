import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import "./login.scss";
import InputText from "../../Common/Input/InputText";
import { useForm } from "react-hook-form";
import ButtonComp from "../../Common/Input/Button";
import memberData from '../../Jsons/member.json';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import movie1 from '../../Assests/image/3I9xJ0Mrmv.gif'
import { loginUser, setFormData } from "../../Redux/actions";
const Login = () => {
  const userIsLoggedIn = useSelector((state:any) => state?.userReducer.userIsLoggedIn);
  console.log(userIsLoggedIn,'hhhhh')
  const dispatch = useDispatch();
const navigate=useNavigate();
  const {
    control,
    formState: { errors },
    setError,
    getValues,

  } = useForm();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
  };
  const LoginSubmit = () => {

    const value = getValues();

    if (!value.username) {
      setError('username', {
        type: 'required',
        message: 'Please Enter Email',
      });
    } else if (!value.password) {
      setError('password', {
        type: 'required',
        message: 'Please Enter Password',
      });
    }
    
    // Correctly access the form input values
    const user = memberData.find((member) => member.email === value.username && member.password === value.password);
    console.log(user,'user is here');
    if(user){
      dispatch(loginUser());
      navigate('/home');
      dispatch(setFormData('user',user));
    }
    
  
  };

  return (
    <Grid container>
      {/* Left side */}
      <Grid item xs={12} md={6} className="login_leftStyle">
        <Typography className="font-anton">Next Level Experience</Typography>
        <Grid className="content-height"></Grid>
        <Grid className="content-height"></Grid>
        <Grid className="content-height"></Grid>
        <Grid className="content-height"></Grid>
        <Box>
          <img src={movie1}
            style={{ margin: "auto", display: "block" }}
          height='200px'
          />
        </Box>
        <Box>
          <Typography className="font_ShopName">Cinema Gate</Typography>
        </Box>
      </Grid>
      {/* Right side */}
      <Grid item xs={12} md={6}>
        <Box className="login_background" sx={{
          // backgroundColor: "#c7ddcc",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        
          <Paper elevation={4} sx={{ width: "80%", maxWidth: 300, padding: 2, backgroundColor: '#ea8a81' }}>
            <Typography variant="h5" component="div" gutterBottom>
            The screen is awaiting LOGIN
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <InputText
                    error={errors.username}
                    control={control}
                    name="username"
                    className="input_textField"
                    type='text'
                    label={'Email'}
                    labelStyle={{ color: 'black', fontSize: '10px', fontWeight: 'bold' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputText
                    control={control}
                    name="password"
                    className="input_textField"
                    type='password'
                    label={'Password'}
                    labelStyle={{ color: 'black', fontSize: '10px', textAlign: 'center', fontWeight: 'bold' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonComp
                    buttonName={'Login'}
                    onClick={()=>LoginSubmit()}
                    type={'submit'}
                    variant={'contained'}
                    customStyle={{ backgroundColor: 'red', color: 'white' }}
                  />
                </Grid>
              </Grid>
            </form>
            <Box mt={2}></Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
