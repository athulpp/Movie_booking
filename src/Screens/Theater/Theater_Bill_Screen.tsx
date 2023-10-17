import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Common/Header";
import { Grid, Typography } from "@mui/material";
import Footer from "../../Common/Footer";
import { useNavigate } from "react-router-dom";
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";
const Theater_Bill_Screen = () => {
    const advertismentArray=[
        logo1,logo2,logo3,logo4,logo5,logo6
          ]
    const navigate=useNavigate();

  const location = useLocation();
  const userIsLoggedIn = useSelector(
    (state: any) => state?.userReducer.userIsLoggedIn
  );

  useEffect(()=>{
if(!userIsLoggedIn){
    navigate("/")
}
  },[]);

  return (
    <div className="page_background">
      <Header />
      <Grid className="content-height"></Grid>
      <Grid container xs={12} sm={12} md={12} className="profile_margin">
        <Grid className="content-height"></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="bill_container_border "
        >
          <Typography className="centered-image-container font_header" >
            About Theatre
          </Typography>
          <div className="centered-image-container">
            <img
              src={location.state?.theatre?.image}
              height={150}
              width={300}
              alt="theatre"
            />
            <Grid className="content-height"></Grid>
            <Grid className="content-row_withoutPad">
              <Typography className="font_regular_12px">Name : </Typography>
              <Typography className="font_regular_12px">
                {location.state?.theatre?.name}
              </Typography>
            </Grid>
            <Grid className="content-row_withoutPad">
              <Typography className="font_regular_12px">Address:</Typography>
              <Typography className="font_regular_12px">
                {location.state?.theatre?.address}
              </Typography>
            </Grid>
            <Grid className="content-row_withoutPad">
              <Typography className="font_regular_12px">Contact :</Typography>
              <Typography className="font_regular_12px">
                {location.state?.theatre.contact_number}
              </Typography>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={7} className="bill_container_border">
          <Typography  className="centered-image-container font_header">
            Ticket Details
          </Typography>
          <Grid
            container
            xs={12}
            sm={12}
            className="centered-image-container bill_margin_top "
          >
            <Grid item xs={12} sm={12} md={8} className="bill-text-overlay ">
              <Grid container className="content-row_withoutPad">
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={8}
                  className="content-row space_between bill_pad_left"
                >
                  <Typography className="font_regular_12px">Movie :</Typography>
                  <Typography className="font_regular_12px">{" " + location.state?.movie}</Typography>
                </Grid>
              </Grid>
              <Grid container className="content-row_withoutPad">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className="content-row space_between bill_pad_left"
                >
                  <Typography className="font_regular_12px">Date :</Typography>
                  <Typography className="font_regular_12px">{location.state?.date}</Typography>
                </Grid>
              </Grid>
              <Grid container className="content-row_withoutPad">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className="content-row space_between bill_pad_left"
                >
                  <Typography className="font_regular_12px">Ticket price :</Typography>
                  <Typography className="font_regular_12px">{"₹" + location.state?.ticketPrice}</Typography>
                </Grid>
              </Grid>
              <Grid container className="content-row_withoutPad">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className="content-row space_between bill_pad_left"
                >
                  <Typography className="font_regular_12px">Tax :</Typography>
                  <Typography className="font_regular_12px">{"₹" + location.state?.tax}</Typography>
                </Grid>
              </Grid>
              <Grid container className="content-row_withoutPad">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className="content-row space_between bill_pad_left"
                >
                  <Typography className="font_regular_12px">Total :</Typography>
                  <Typography className="font_regular_12px">{"₹" + location.state?.totalCharge}</Typography>
                </Grid>
              </Grid>
              <Grid container className="content-row_withoutPad">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className="content-row space_between bill_pad_left"
                >
                  <Typography className="font_regular_12px">Seats :</Typography>
                  <Typography className="font_regular_12px">
                    {location.state?.seats.length > 1
                      ? location.state?.seats
                          .map((item: any) => item.seatNumber)
                          .join(",")
                      : location.state?.seats[0].seatNumber}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} sm={4} md={4}>
              <img src={location.state?.filmImage} height={200} width={150} style={{borderRadius:"10px"}} />
              {/* Place your content for the second portion here */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="content-height"></Grid>
      <Grid className="content-height"></Grid>
      <Typography className="content-row font_subHeader_bold">
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
    <Footer/>
    </div>
  );
};

export default Theater_Bill_Screen;
