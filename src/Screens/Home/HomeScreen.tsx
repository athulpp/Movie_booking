import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomCarousel from "../../Common/AdvertismentCarousal";
import { Grid, Paper, Typography } from "@mui/material";
import adv1 from "../../Assests/image/ad_image/slug-navratri-collection-202309251241.jpg";
import adv2 from "../../Assests/image/icc-cwc-banner-collection-202308220156.jpg";
import theaterData from "../../Jsons/theater.json";
import Footer from "../../Common/Footer";
import { setFormData } from "../../Redux/actions";
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";
import "./home.scss";
import ButtonComp from "../../Common/Input/Button";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector(
    (state: any) => state?.userReducer.userIsLoggedIn
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate("/");
    }
  }, []);

  const onClickMovie = (data: any, data2: any) => {
    console.log(data, "selected film");

    dispatch(setFormData("movie", data));
    dispatch(setFormData("theatre", data2));
    navigate("/moviedes", { state: data });
  };

  const handleImageClick = () => {
    window.open("https://www.cricketworldcup.com/", "_blank");
  };

  const viewAll=(index:any,data:any)=>{
console.log(index,'check');
console.log(data,'data check');
    navigate('/allMovies',{state:data});
  }
  const advertismentArray = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div className="page_background">
      <Header />
      <Grid className="content-height"></Grid>
      <CustomCarousel />
      <Grid className="content-height"></Grid>
      <Grid>
        <Grid container xs={12}>
          <Grid item xs={12} md={12} sm={12} className="content-row">
            <Grid xs={1}></Grid>
            <img className="home-banner-style" src={adv1} alt="Ad Image" />
            <Grid xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid className="content-height"></Grid>
        {theaterData.map((item,index) => (
          <div key={item.id}>
            <Grid className="content-row space_between">
              <Typography className="font_header">
                {item.name}
              </Typography>
              <Grid>
                <ButtonComp
                  className="custom-button"
                  buttonName={"View All"}
                  onClick={()=>viewAll(index,item)}
                  customStyle={{
                    backgroundColor: "#F5DEB3",
                    color: "black",
                    height: "50px",
                  }}
                />
              </Grid>
            </Grid>

            <div className="wrapper">
              {item.films.map((film: any) => (
                <div className="select">
                  <div onClick={() => onClickMovie(film, item)}>
                    <img
                      className="item"
                      key={film.id}
                      src={film.image}
                      alt={film.title}
                      style={{ borderRadius: "40px" }}
                    />
                  </div>
                  <Grid className="content-row_withoutPad space_between">
                    <Typography className="font_subHeader_normal">
                      {film.title}
                    </Typography>
                    <Typography className="font-golden font_subHeader_bold">
                      {film.rating}
                    </Typography>
                  </Grid>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12} md={12} sm={12} className="content-row">
          <Grid xs={1}></Grid>
          <img
            onClick={() => handleImageClick()}
            className="home-banner-style"
            src={adv2}
            alt="Ad Image"
          />
          <Grid xs={1}></Grid>
        </Grid>
      </Grid>
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

export default HomeScreen;
