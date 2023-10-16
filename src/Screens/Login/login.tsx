import React,{useState} from "react";
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
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";
const Login = () => {
  const userIsLoggedIn = useSelector((state:any) => state?.userReducer.userIsLoggedIn);
  console.log(userIsLoggedIn,'hhhhh')
  const dispatch = useDispatch();
  const [userError,setUserError]=useState(false);
  const advertismentArray=[
    logo1,logo2,logo3,logo4,logo5,logo6
      ]
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
    }else{
      setUserError(true);
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
        <Grid className="content-height"></Grid>
        <Grid className="content-height"></Grid>
        <Grid className="content-height"></Grid>
        <Grid className="content-height"></Grid>  
        <Typography className="content-row font_subHeader_bold" style={{color:"white"}}>
        Our Partners
      </Typography>
      <Grid className="content-height"></Grid>
        <Grid className="content-row" container spacing={2}>
      {advertismentArray.map((image, index) => (
        <Grid item xs={2} sm={2} md={2} lg={2} key={index} className="centered-image-container" >
          <img src={image} height={50} width={50} alt={`Image ${index + 1}`}  />
        </Grid>
      ))}
    </Grid>
      </Grid>
      {/* Right side */}
      <Grid item xs={12} md={6}>
        <Box className="login_background" sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        
          <Paper elevation={4} sx={{ width: "80%", maxWidth: 300, padding: 2, backgroundColor: '#ea8a81' }}>
            <Typography className="font_subHeader_bold" component="div" gutterBottom>
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
                <Grid className="content-height"></Grid>
                {userError? <Grid xs={12} className="content-row">
                  <Typography className="font_subHeader_bold">Login Credentials Invalid</Typography>
                </Grid>:<Grid></Grid>}
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
