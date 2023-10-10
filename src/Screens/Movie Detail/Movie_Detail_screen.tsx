import { Box, Grid, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../Common/Header";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Common/Footer";
import "./movie.scss";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonComp from "../../Common/Input/Button";
import { setFormData } from "../../Redux/actions";

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
  //  const seatData=useSelector((state:any)=>state?.form.movieData?.title);
  console.log(movieData, "getting movie data here");

  const navigateToBooking = () => {
    navigate("/seatbook", { state: location.state });
  };
  // const typographyStyle = {
  //   // Add your custom styles here
  //   margin: "0",
  //   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //   fontWeight: "bold",
  //   fontSize: "1.2rem",
  //   lineHeight: "1.5",
  //   letterSpacing: "0.00938em",
  //   color: "white",
  // };

  // const boxStyle = {
  //    maxWidth: "25rem",
  //   backgroundColor: "#ccc", // Grey background color
  //   borderRadius: "8px", // Rounded corners
  //   padding: "20px", // Padding for content inside the box
  // };
  return (
    <Grid container>
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
        <Grid xs={6} sm={3} className="movie_movie_image">
          <img
            src={movieData?.image}
            height={"100%"}
            width={"100%"}
            style={{ borderRadius: "20px" }}
            alt="Movie"
          />
        </Grid>
        <Grid xs={6} sm={9}>
          <div className="movie_header">
            <Typography variant="h6">{movieData.title}</Typography>
            <Grid className="content-height"></Grid>
            <Typography>{movieData.genre}</Typography>
            <Grid className="content-height"></Grid>
            <Grid className="content-row_withoutPad ">
              <Typography className="container_right_padding">
                {movieData.duration}
              </Typography>
              <Typography>{movieData.type}</Typography>
            </Grid>
            <Grid className="content-height"></Grid>
            <Grid
            className="movie_rating_box"
            >
              <Rating
                name="read-only"
                value={movieData.rating}
                precision={0.5}
                readOnly
              />
            </Grid>
            <Grid className="content-height"></Grid>
            {/* <Grid className="content-height"></Grid> */}
            <Grid className='movie_review_box'>
              <Grid className="content-row_withoutPad" xs={12}>
                <Grid item xs={0} sm={6} className="content-row_withoutPad">
                  <Typography >Add Rating & Review</Typography>
                </Grid>
                <Grid xs={0} sm={2}></Grid>
                <Grid xs={0} sm={4}>
                  <ButtonComp
                    buttonName={"rate now"}
                    customStyle={{ backgroundColor: "#F5DEB3", color: "black",height:"50px"  }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid className="content-height"></Grid>
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
      <Typography variant="h5" className="content-row">
        About Movie
      </Typography>
      <Grid xs={12} sm={12} className="movie_description_list">
        <Typography >{movieData.des}</Typography>
      </Grid>

      <Grid className="container-height"></Grid>
      <Footer />
    </Grid>
  );
};

export default Movie_Detail_screen;
