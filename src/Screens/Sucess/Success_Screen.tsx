import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Common/Header";
import image1 from "../../Assests/image/animation_lnegru2a_small.gif";
import "./sucess.scss";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../Common/Input/Button";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import logo1 from "../../Assests/image/Logo/logo1.jpg";
import logo2 from "../../Assests/image/Logo/logo 2.png";
import logo3 from "../../Assests/image/Logo/logo3.png";
import logo4 from "../../Assests/image/Logo/logo 4.jpg";
import logo5 from "../../Assests/image/Logo/logo 5.png";
import logo6 from "../../Assests/image/Logo/logo 6.png";
import Footer from "../../Common/Footer";

const Sucess_screen = () => {
  const navigate = useNavigate();
  const bookList = useSelector((state: any) => state?.bookedList);
  const currentBookedList = useSelector((state: any) => state?.form?.movie);
  const bookedSeats = useSelector((state: any) => state?.form.booked);
  const jsonString = JSON.stringify(bookList);
  console.log(jsonString, "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  const userIsLoggedIn = useSelector(
    (state: any) => state?.userReducer.userIsLoggedIn
  );
  const advertismentArray=[
    logo1,logo2,logo3,logo4,logo5,logo6
      ];
  useEffect(()=>{
    if(!userIsLoggedIn){
      navigate('/');
    }
  },[]);

  const downloadPdf = () => {
    let save: any = saveAs;
    const width = 85;
    const height = 55;

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [width, height], // specify the custom width and height for your page
    });
    const seatNumber = bookedSeats.seats.map((item: any) => {
      return item.seatNumber.toString();
    });
    const seatNumbers: string = String(seatNumber);
    // const movieName: string = String(bookList.dataMap.movie);
    doc.setFontSize(12);
    doc.text("Bill", 25, 5);
    doc.text("Cinema Gate", 15, 10);
    doc.setFontSize(7);
    doc.text("Movie:", 10, 20);
    doc.text(currentBookedList.title, 20, 20);
    doc.text("Genre:", 10, 30);
    doc.text(currentBookedList.genre, 20, 30);
    doc.text("Seat No:", 10, 40);
    doc.text(seatNumbers, 20, 40);
    doc.text("Ticket Price:", 10, 50);
    doc.text(bookedSeats.ticketPrice.toString(), 25, 50);
    doc.text("Tax:", 10, 60);
    doc.text(bookedSeats.tax.toString(), 15, 60);
    doc.text("Total:", 10, 70);
    doc.text(bookedSeats.totalCharge.toString(), 20, 70);
    doc.text("Thank You!", 20, 80);
    const pdfBlob = doc.output("blob");

    // Create a file name for the PDF
    const fileName = "ticketBill.pdf";

    // Use the saveAs function from file-saver to trigger the download
    save(pdfBlob, fileName);
  };

  return (
    <div>
      <Grid>
        <Header />
        <Grid className="content-height"></Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "80vh" }}
        >
          <Grid item xs={12} className="success_center">
            <Typography variant="h4">
              Success Your Ticket has been booked!
            </Typography>
            <img src={image1} />
            <Grid className="content-row" justifyContent={"center"}>
              <ButtonComp
                buttonName={"Home"}
                onClick={() => navigate("/home")}
                type="submit"
                variant="contained"
                customStyle={{ backgroundColor: "red", color: "white" }}
              />
              <Grid className="padd_bw"></Grid>
              <ButtonComp
                buttonName={"Take your Bill"}
                onClick={() => downloadPdf()}
                type="submit"
                variant="contained"
                customStyle={{ backgroundColor: "yellow", color: "black" }}
              />
            </Grid>
          </Grid>
        </Grid>
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
      </Grid>
    </div>
  );
};

export default Sucess_screen;
