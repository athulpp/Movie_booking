import React, { useState, useEffect } from "react";
import Header from "../../Common/Header";
import { Grid, Typography } from "@mui/material";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../../Common/Footer";
import ButtonComp from "../../Common/Input/Button";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../Redux/actions";
import { formatDate, formatTime } from "../../Common/date_conversion";
import empty from "../../Assests/image/techny-empty-clipboard.png";
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";
const Booke_show = () => {
    const advertismentArray=[
    logo1,logo2,logo3,logo4,logo5,logo6
      ];
  const dispatch = useDispatch();
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

  const navigateDetails = (data: any) => {
    // console.log(data,'vvvvvvvvvvv');
    navigate("/storebill", { state: data });
    dispatch(setFormData("theatreBill", data));
  };

  return (
    <div className="page_background"> 
      <Header />
      <Grid className="content-height"></Grid>
      <Typography variant="h4" className="content-row font_header">
        Profile
      </Typography>
      <Grid container xs={12} sm={12} md={12} className="profile_margin">
        <Grid className="content-height"></Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="bill_container_border"
          // sx={{ border: "2px solid #ccc", borderRadius: "10px" }}
        >
          <div className="centered-image-container">
            <img src={userDetails?.image} height={100} width={100} alt="User" />
          </div>
          <Grid className="content-height"></Grid>
          <Grid className="content-row space_between">
            <Typography className="font_regular_12px">Name</Typography>
            <Typography className="font_regular_12px">
              {userDetails?.name}
            </Typography>
          </Grid>
          <Grid className="common_line_height"></Grid>
          <Grid className="content-row space_between">
            <Typography className="font_regular_12px">Last Name</Typography>
            <Typography className="font_regular_12px">
              {userDetails?.last_name}
            </Typography>
          </Grid>
          <Grid className="common_line_height"></Grid>
          <Grid className="content-row space_between">
            <Typography className="font_regular_12px">Email</Typography>
            <Typography className="font_regular_12px">
              {userDetails?.email}
            </Typography>
          </Grid>
          <Grid className="common_line_height"></Grid>
          <Grid className="content-row space_between">
            <Typography className="font_regular_12px">Phone</Typography>
            <Typography className="font_regular_12px">
              {userDetails?.phone}
            </Typography>
          </Grid>
        </Grid>

        {bookList.length != 0 && (
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
        )}
        {bookList.length != 0 ? (
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
                                <Typography>
                                  {movie?.date && formatDate(movie?.date)}
                                </Typography>
                              </Grid>
                              <Grid className="content-height"></Grid>
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                className="content-row"
                              ></Grid>
                            </Grid>
                            <Grid
                              textAlign={"end"}
                              sx={{ paddingRight: "5px" }}
                            >
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
                    <div key={item.data[0].movie} className="profile_margin">
                      <div className="profile_Movies_container profile_margin">
                        <Grid item xs={6} sm={6} className="content-row">
                          <Typography>Movie:</Typography>
                          <Typography>{item?.data[0]?.movie}</Typography>
                        </Grid>
                        <Grid item xs={8} sm={6} className="content-row">
                          <Typography>Date:</Typography>
                          <Typography>
                            {formatDate(item?.data[0]?.date)}
                          </Typography>
                        </Grid>

                        {/* <Typography>{item?.data[0]?.movie}</Typography>
                        <Typography>{item?.data[0]?.date}</Typography> */}
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
        ) : (
          <Grid item xs={11} sm={7} className="book-booklist_empty">
            <Grid>Your Booking List is Empty</Grid>
            <Grid>
              <img src={empty} height={150} width={150} />
            </Grid>
          </Grid>
        )}
      </Grid>
      {bookList.length == 0 && (
        <>
          <Grid className="content-height"></Grid>
          <Grid className="content-height"></Grid>
          <Grid className="content-height"></Grid>
        </>
      )}
 <Grid className="content-height"></Grid>
      <Typography className="content-row font_subHeader_bold home-pad-left" variant="h5">
        Our Partners
      </Typography>
      <Grid className="content-height"></Grid>
      <Grid className="content-row" container spacing={2}>
      {advertismentArray.map((image, index) => (
        <Grid item xs={2} sm={2} md={2} lg={2} key={index} className="centered-image-container" >
          <img className="sponsor_image" src={image} alt={`Image ${index + 1}`}  />
        </Grid>
      ))}
    </Grid>
      <Grid className="content-height"></Grid>
      <Footer />
    </div>
  );
};

export default Booke_show;
