import React, { useState, useEffect } from "react";
import Header from "../../Common/Header";
import { Grid, Typography } from "@mui/material";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../../Common/Footer";
import ButtonComp from "../../Common/Input/Button";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../Redux/actions";
import { formatDate } from "../../Common/date_conversion";

const Booke_show = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const bookList = useSelector((state: any) => state?.bookedList.dataArray);
  // const bookList = [...originalBookList].slice().reverse();
  console.log("bool", bookList);
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

  const navigateDetails=(data:any)=>{
console.log(data,'vvvvvvvvvvv');
navigate('/storebill',{state:data});
dispatch(setFormData('theatreBill',data));

  }

  return (
    <div>
      <Header />
      <Grid className="content-height"></Grid>
      <Grid container xs={12} sm={12} md={12} className="profile_margin">
        <Grid className="content-height"></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ border: "2px solid #ccc" }}>
  <div className="centered-image-container">
    <img src={userDetails?.image} height={100} width={100} alt="User" />
  </div>

  <Typography variant="h4" className="content-row">
    Profile
  </Typography>
  <Grid className="content-height"></Grid>
  <Grid className="content-row space_between">
    <Typography variant="h6">Name</Typography>
    <Typography variant="h6">{userDetails?.name}</Typography>
  </Grid>
  <Grid className="content-row space_between">
    <Typography variant="h6">Last Name</Typography>
    <Typography variant="h6">{userDetails?.last_name}</Typography>
  </Grid>
  <Grid className="content-row space_between">
    <Typography variant="h6">Email</Typography>
    <Typography variant="h6">{userDetails?.email}</Typography>
  </Grid>
  <Grid className="content-row space_between">
    <Typography variant="h6">Phone</Typography>
    <Typography variant="h6">{userDetails?.phone}</Typography>
  </Grid>
</Grid>

        <Grid
          item
          xs={1}
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
        <Grid item xs={11} sm={7} className="scrollable-content-right">
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
                              <Typography>{movie?.movie}</Typography>
                            </Grid>
                            <Grid xs={6} sm={6} className="content-row">
                              <Typography>Date:</Typography>
                              <Typography>{movie?.date&&formatDate(movie?.date)}</Typography>
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
                              onClick={() => navigateDetails(movie)}
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
                      <Typography>{item?.data[0]?.movie}</Typography>
                      <Typography>{item?.data[0]?.date}</Typography>
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
                              onClick={() => navigateDetails(item.data[0])}
                            />
                          </Grid>
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
