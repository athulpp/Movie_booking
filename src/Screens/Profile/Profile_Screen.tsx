import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../Common/Header";
import { Grid, Typography } from "@mui/material";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../../Common/Footer";
import ButtonComp from "../../Common/Input/Button";

const Booke_show = () => {
  const navigate = useNavigate();
  const bookList = useSelector((state: any) => state?.bookedList.dataArray);
  // const bookList = [...originalBookList].slice().reverse();
  console.log("bool", JSON.stringify(bookList));
  const userDetails = useSelector((state: any) => state?.form.user);
  const userIsLoggedIn = useSelector(
    (state: any) => state?.userReducer.userIsLoggedIn
  );

  useEffect(() => {
    if (!userIsLoggedIn) {
      navigate("/");
    }
  }, []);

  const ArrowList = () => {
    const arrowCount = 10; // Number of arrows you want

    // Create an array of "→" symbols
    const arrowsArray = Array.from({ length: arrowCount }, (_, index) => "→");

    return (
      <div>
        {arrowsArray.map((arrow, index) => (
          <div key={index}>{arrow}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Grid className="content-height"></Grid>
      <Grid container xs={12} sm={12} md={12} className="profile_margin">
        <Grid className="content-height"></Grid>
        <Grid item xs={6} sm={4} sx={{ border: "2px solid #ccc" }}>
          <div className="centered-image-container">
            <img src={userDetails.image} height={100} width={100} />
          </div>

          <Typography variant="h4" className="content-row">
            Profile
          </Typography>
          <Grid className="content-height"></Grid>
          <Grid className="content-row space_between">
            <Typography variant="h6">Name</Typography>
            <Typography variant="h6">{userDetails.name}</Typography>
          </Grid>
          <Grid className="content-row space_between">
            <Typography variant="h6">Last Name</Typography>
            <Typography variant="h6">{userDetails.last_name}</Typography>
          </Grid>
          <Grid className="content-row space_between">
            <Typography variant="h6">Email</Typography>
            <Typography variant="h6">{userDetails.email}</Typography>
          </Grid>
          <Grid className="content-row space_between">
            <Typography variant="h6">Phone</Typography>
            <Typography variant="h6">{userDetails.phone}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={0}
          sm={1}
          textAlign={"center"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <>
            <div>{ArrowList()}</div>
            <div> Ticket List</div>
            <div>{ArrowList()}</div>
          </>
        </Grid>
        <Grid item xs={6} sm={7} className="scrollable-content-right">
          {bookList.map((item: any) => {
            if (item.key === userDetails.id) {
              if (item.data.length > 1) {
                return (
                  <div className="" key={item.movie}>
                    {item.data
                      .slice()
                      .reverse()
                      .map((movie: any, index: number) => (
                        <div className="profile_Movies_container">
                          <Grid className="content-height"></Grid>
                          <Grid container xs={12} sm={12} key={movie.movie}>
                            <Grid item xs={6} sm={6} className="content-row">
                              <Typography>Movie:</Typography>
                              <Typography>{movie.movie}</Typography>
                            </Grid>
                            <Grid xs={6} sm={6} className="content-row">
                              <Typography>Date:</Typography>
                              <Typography>{movie.date}</Typography>
                            </Grid>
                            <Grid className="content-height"></Grid>
                            <Grid
                              item
                              xs={6}
                              sm={6}
                              className="content-row"
                            ></Grid>
                          </Grid>
                          <Grid textAlign={"end"} sx={{ paddingRight: "5px" }}>
                            <ButtonComp
                              buttonName={"View"}
                              type={"submit"}
                              variant={"contained"}
                              customStyle={{
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "15px",
                              }}
                              onClick={() => console.log(movie, "movie")}
                            />
                          </Grid>
                        </div>
                      ))}
                  </div>
                );
              } else {
                return (
                  <div key={item.data[0].movie}>
                    <div className="profile_Movies_container profile_margin">
                      <Typography>{item.data[0].movie}</Typography>
                      <Typography>{item.data[0].date}</Typography>
                    </div>
                  </div>
                );
              }
            }
            return null;
          })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Booke_show;
