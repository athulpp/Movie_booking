import { Grid, Typography } from "@mui/material";
import React,{useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import Header from "../../Common/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { setFormData } from "../../Redux/actions";
import "./full_movie.scss";
import Footer from "../../Common/Footer";
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";
const Theatre_Full_movie = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onClickMovie = (data: any) => {


    dispatch(setFormData("movie", data));
    dispatch(setFormData("theatre", location.state));
    navigate("/moviedes", { state: data });
  };
    const userIsLoggedIn = useSelector(
    (state: any) => state?.userReducer.userIsLoggedIn
  );
  const advertismentArray = [logo1, logo2, logo3, logo4, logo5, logo6];
  useEffect(()=>{
    if (!userIsLoggedIn) {
        navigate("/");
      }
      window.scrollTo(0, 0);
  },[])
  
  return (
    <div className="page_background">
      <Header/>
      <Grid style={{ backgroundColor: "#343434" }}>
        <Grid className="content-height"></Grid>
        <Grid>
          <Typography className="centered-image-container font_header font_white">
            {location?.state?.name}
          </Typography>

          <Grid className="centered-image-container">
            <img
              src={location.state?.image}
              style={{ maxWidth: "100%", height: "90%", borderRadius: "20px" }}
              alt="theatre"
            />
          </Grid>
          <Grid className="common_line_height"></Grid>
          <Typography className=" content-row font_regular_12px font_white">
            {location?.state?.address}
          </Typography>
          <Grid className="common_line_height"></Grid>
          <Typography className="content-row font_regular_12px font_white">
            {"Ph: " + location?.state?.contact_number}
          </Typography>
        </Grid>
      </Grid>
      <Grid className="content-height"></Grid>
      <div className="theatre-wrap ">
        {location?.state?.films.map((film: any) => (
          <div key={film?.id} className="select centered-image-container" style={{paddingBottom:"2rem"}}>
            <div onClick={() => onClickMovie(film)}>
              <img
                className="item"
                src={film?.image}
                alt={film?.title}
                style={{ borderRadius: "40px" }}
              />
            </div>
            <Grid className="content-row_withoutPad space_between">
              <Typography className="font_subHeader_normal">
                {film?.title}
              </Typography>
              <Typography className="font-golden font_subHeader_bold">
                {film?.rating}
              </Typography>
            </Grid>
          </div>
        ))}
      </div>
      <Grid className="content-height"></Grid>
      <Typography
        className="content-row font_subHeader_bold home-pad-left"
        variant="h5"
      >
        Our Partners
      </Typography>
      <Grid className="content-height"></Grid>
      <Grid className="content-row" container spacing={2}>
        {advertismentArray.map((image, index) => (
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            key={index}
            className="centered-image-container"
          >
            <img
              className="sponsor_image"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </Grid>
        ))}
      </Grid>
      <Grid className="content-height"></Grid>
      <Footer />
    </div>
  );
};

export default Theatre_Full_movie;
