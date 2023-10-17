import { Box, Grid, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../Common/Header";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Common/Footer";
import "./movie.scss";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonComp from "../../Common/Input/Button";
import { setFormData } from "../../Redux/actions";
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";

const Movie_Detail_screen = () => {
  const userIsLoggedIn = useSelector(
    (state: any) => state?.userReducer.userIsLoggedIn
  );
  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movieData = useSelector((state: any) => state?.form.movie);


  const navigateToBooking = () => {
    navigate("/seatbook", { state: location.state });
  };
  const advertismentArray=[
    logo1,logo2,logo3,logo4,logo5,logo6
      ]
  return (
    <Grid className="page_background" >
      <Header />
      <Grid className="content-height"></Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        className="content-row movie_backgroundImage"
      >
        {/* Clear image on top */}
        <Grid xs={4} sm={4} md={4} lg={5} className="movie_movie_image">
          <img
            src={movieData?.image} className="movie_cover_pic"
            alt="Movie"
          />
        </Grid>
        <Grid xs={8} sm={8} md={8} lg={7}>
          <div className="movie_header">
            <Typography className="font_header">{movieData?.title}</Typography>
            <Grid className="content-height"></Grid>
            <Typography className="font_subHeader_bold">{movieData?.genre}</Typography>
            <Grid className="content-height"></Grid>
            <Grid className="content-row_withoutPad">
              <Typography className="container_right_padding font_subHeader_bold">
                {movieData?.duration}
              </Typography>
              <Typography className="font_subHeader_bold">{movieData?.type}</Typography>
            </Grid>
            <Grid className="content-height"></Grid>
            <Grid
            className="movie_rating_box"
            >
              <Rating
                name="read-only"
                value={movieData?.rating}
                precision={0.5}
                readOnly
              />
            </Grid>
            <Grid className="content-height"></Grid>
            {/* <Grid className="content-height"></Grid> */}
            <Grid className='movie_review_box'>
              <Grid className="content-row_withoutPad" xs={12}>
                <Grid item xs={0} sm={6} className="content-row_withoutPad movie_margin_review">
                  <Typography className="font_regular_12px">Add Rating & Review</Typography>
                </Grid>
                <Grid xs={0} sm={2}></Grid>
                <Grid xs={0} sm={4}>
                  <ButtonComp
                  className='custom-button'
                    buttonName={"rate now"}
                    customStyle={{ backgroundColor: "#F5DEB3", color: "black",height:"50px"  }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={6} className="content-height"></Grid>
            {/* <Grid className="content-height"></Grid> */}
            <ButtonComp
              buttonName={"Book Tickets"}
              onClick={() => navigateToBooking()}
              variant={"contained"}
              customStyle={{ backgroundColor: "red", color: "white" }}
            />
          </div>
          <Grid className="content-height"></Grid>
        </Grid>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${movieData?.image})`,
            backgroundSize: "cover",
            filter: "blur(15px)",
          }}
        ></div>
      </Grid>
      {/* <Grid className='container-height' style={{paddingBottom:"50px"}}>{'      '}</Grid> */}
      <Typography variant="h5" className="content-row font_header">
        About Movie
      </Typography>
      <Grid xs={12} sm={12} className="movie_description_list font_regular_12px">
        <Typography >{movieData?.des}</Typography>
      </Grid>
      <Grid className="content-height"></Grid>
      <Grid className="content-row" container spacing={2}>
      {advertismentArray.map((image, index) => (
        <Grid item xs={2} sm={2} md={2} lg={2} key={index} className="centered-image-container" >
          <img className="sponsor_image" src={image} alt={`Image ${index + 1}`}  />
        </Grid>
      ))}
    </Grid>
      <Grid className="content-height"></Grid>
      <Grid className="container-height"></Grid>
      <Footer />
    </Grid>
  );
};

export default Movie_Detail_screen;
