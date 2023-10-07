import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addData, setFormData } from "../../Redux/actions";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../../Common/Header";
import "./book.scss";
import ButtonComp from "../../Common/Input/Button";
import Footer from "../../Common/Footer";
import { calculateGST } from "../../Common/TaxCalcualtor";
import { getCurrentDateTime } from "../../Common/date_conversion";
interface bookData {
  id: any;
  seatNumber: any;
  status: any;
}

const Booking_Screen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [ticketCount, setTicketCount] = useState();
  const [totalTax, setTotalTax] = useState<number>();
  const [total, setTotal] = useState<number>();
  const userDetails = useSelector((state: any) => state?.form.user);
  console.log(userDetails, "userDetails is here");
  const handleOpen = () => {
    let count: any = 0;
    selectedSeats.map((item: any) => {
      if (item.status == "available") {
        count++;
      }
    });
    console.log(count, "count is ");
    calculateTax(count);
    setTicketCount(count);

    if (count >= 1) {
      setOpen(true);
    }
  };
  const calculateTax = (data: number) => {
    const taxAmount = calculateGST(150 * data, 18);
    setTotalTax(taxAmount);
    const total = taxAmount + data * 150;
    setTotal(total);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const [selectedSeats, setSelectedSeats] = useState<bookData[]>([]);
  useEffect(() => {
    // Create a key for storing movie data in local storage
    const localStorageKey = `movie_${location.state.id}`;

    // Get the existing movie data from local storage
    const storedMovieData = sessionStorage.getItem(localStorageKey);

    if (storedMovieData) {
      // If movie data exists, parse it and get the booked seats
      const parsedMovieData = JSON.parse(storedMovieData);
      const bookedSeats = parsedMovieData.seats.filter(
        (seat: any) => seat.status === "booked"
      );

      // Set the booked seats as the initial selected seats
      setSelectedSeats(bookedSeats);
      console.log(bookedSeats, "booked seats");
    }
  }, [location.state.id]);
  //   const handleSeatClick = (seat:any) => {
  //     if (seat.status === 'available') {
  //       // Check if the seat is not already in the selectedSeats array (to avoid duplicate selection)
  //       if (!selectedSeats.some((selectedSeat) => selectedSeat.id === seat.id)) {
  //         // Add the seat to selected seats
  //         setSelectedSeats([...selectedSeats, seat]);

  //         // Update the seat status to 'booked'
  //         // const updatedSeats = location.state.seats.map((s:any) =>
  //         //   s.id === seat.id ? { ...s, status: 'booked' } : s
  //         // );

  //         // // Update the movie's seats data
  //         // location.state.seats = updatedSeats;
  //       }
  //     } else if (seat.status === 'booked') {
  //       // Seat is already booked, handle accordingly (e.g., show a message)
  //       console.log(`Seat ${seat.seatNumber} is already booked.`);
  //     }
  //   };

  const handleSeatClick = (seat: any) => {
    // Check if the seat is already booked in local storage
    const localStorageKey = `movie_${location.state.id}`;
    const storedMovieData = JSON.parse(
      sessionStorage.getItem(localStorageKey) || "{}"
    );
    const isSeatBooked = storedMovieData?.seats?.some(
      (s: any) => s.id === seat.id && s.status === "booked"
    );

    if (isSeatBooked) {
      // Seat is already booked in local storage, handle accordingly (e.g., show a message)
      console.log(`Seat ${seat.seatNumber} is already booked.`);
      return;
    }
    console.log(seat.status, "check the seat status");
    // Check if the seat is currently selected
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.id === seat.id
    );

    if (isSelected) {
      // If the seat is selected, remove it from selectedSeats
      const updatedSelectedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat.id !== seat.id
      );
      setSelectedSeats(updatedSelectedSeats);
    } else {
      // If the seat is not selected, add it to selectedSeats
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = () => {
    // Create a key for storing movie data in local storage
    const localStorageKey = `movie_${location.state.id}`;

    // Get the existing movie data from local storage
    const storedMovieData = sessionStorage.getItem(localStorageKey);
    let updatedMovieData = location.state;

    if (storedMovieData) {
      // If movie data exists, parse it and update the seats
      const parsedMovieData = JSON.parse(storedMovieData);

      // Update the seat status in the parsed movie data
      updatedMovieData.seats.forEach((seat: any) => {
        const updatedSeat = selectedSeats.find(
          (selectedSeat) => selectedSeat.id === seat.id
        );
        if (updatedSeat) {
          seat.status = "booked";
        }
      });
      console.log(selectedSeats, "selected seats ......");
    } else {
      console.log("first time booking is here");
      updatedMovieData.seats.forEach((seat: any) => {
        const updatedSeat = selectedSeats.find(
          (selectedSeat) => selectedSeat.id === seat.id
        );
        if (updatedSeat) {
          seat.status = "booked";
        }
      });
      // If there's no existing data, set the initial data to the current state
      sessionStorage.setItem(localStorageKey, JSON.stringify(updatedMovieData));
    }

    // Save the updated movie data to local storage
    sessionStorage.setItem(localStorageKey, JSON.stringify(updatedMovieData));
    const selectedElements = selectedSeats.slice(-ticketCount!);
    console.log(selectedElements, "selected Elements");
    const filmList = {
      seats: selectedElements,
      movie: location.state.title,
      Booking_Screen,
      tax: totalTax!,
      ticketPrice: 150 * ticketCount!,
      totalCharge: total!,
      date: getCurrentDateTime(),
    };
    dispatch(addData(userDetails.id, filmList));
    dispatch(setFormData("booked", filmList));

    // Log the selected seats (you can replace this with your actual booking logic)
    console.log("Selected Seats:", selectedSeats);
    navigate("/success");
  };

  const finalConfirmation = () => {
    handleBooking();
  };
  return (
    <Grid>
      <Grid>
        <Header />
        <Grid className="content-height"></Grid>
        <Grid
          container
          xs={12}
          className="content-row"
          style={{ maxWidth: "1500px", minWidth: "1400px" }}
        >
          <Grid item xs={12} sm={12} md={12} className="booking_margin">
            <Typography variant="h5">{location.state.title}</Typography>
            <Grid className="content-height"></Grid>
            <img src={location.state.image} height={250} width={200} />
            <Grid className="content-height"></Grid>
            <Typography variant="h6">screen is here</Typography>
          </Grid>
          <Grid className="content-height"></Grid>
        </Grid>
        <Grid
          container
          style={{
            paddingTop: "100px",
            maxWidth: "1500px",
            minWidth: "1400px",
          }}
        >
          {location.state.seats.map((seat: any, index: number) => (
            <Grid
              item
              //   xs={1}
              //   sm={1}
              //   md={1}
              //   lg={1}
              className="booking_margin_seats"
              key={index}
              style={{ flex: "1 0 calc(8% - 10px)" }} // Set a fixed width for each seat to achieve 10 seats per row
            >
              <Box
                onClick={() => handleSeatClick(seat)}
                className={`seat-book ${
                  selectedSeats.some(
                    (selectedSeat) => selectedSeat.id === seat.id
                  )
                    ? "selected-seat"
                    : "seat_nonBook"
                } ${
                  selectedSeats.some(
                    (selectedSeat) =>
                      selectedSeat.status === "booked" &&
                      selectedSeat.id === seat.id
                  )
                    ? "seat-book-back1"
                    : ""
                }`}
              >
                {seat.seatNumber}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* <h2>{location.state.title}</h2>
      <img
        src={location.state.image}
        height={150}
        width={100}
        alt={location.state.title}
      />

      <div className="seat-container">
        {location.state.seats.map((seat: any) => (
          <div
            key={seat.id}
            className={`seat ${seat.status}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.status}
          </div>
        ))}
      </div> */}

      <Grid className="content-height"></Grid>
      <Grid className="centered-text">
        <ButtonComp
          buttonName={"Book Now !"}
          onClick={() => handleOpen()}
          type={"submit"}
          variant={"contained"}
          customStyle={{ backgroundColor: "red", color: "white" }}
        />
      </Grid>
      <Grid className="container-height container_bottom_padding"></Grid>
      <Footer />
      <Dialog
        className="centered-dialog"
        maxWidth="md" // Default maximum width for small to medium screens
        fullWidth // Allow full width for all screens
        //   sx={{

        //     '@media (min-width: 600px)': {
        //       maxWidth: 'xs', // Change to small width for screens wider than 600px
        //     },
        //     '@media (min-width: 960px)': {
        //         maxWidth: 'sm', // Change to large width for screens wider than 960px
        //       },

        //     '@media (min-width: 1000px)': {
        //       maxWidth: 'md', // Change to large width for screens wider than 960px
        //     },
        //   }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Book Ticket</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid xs={12} className="content-row">
              <Grid item xs={6} sm={6}>
                <Grid
                  xs={12}
                  className="content-row"
                  sx={{ paddingTop: "10px" }}
                >
                  <Grid xs={6}>
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      Ticket count
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      {ticketCount}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  className="content-row"
                  sx={{ paddingTop: "10px" }}
                >
                  <Grid xs={6}>
                    {" "}
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      Ticket Price
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    {" "}
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      {"₹" + Math.floor(Number(ticketCount)) * 150}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  className="content-row"
                  sx={{ paddingTop: "10px" }}
                >
                  <Grid xs={6}>
                    {" "}
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      Tax
                    </Typography>
                  </Grid>

                  <Grid xs={6}>
                    {" "}
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      {"₹" + totalTax}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  className="content-row"
                  sx={{ paddingTop: "10px" }}
                >
                  <Grid xs={6}>
                    {" "}
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      Total
                    </Typography>
                  </Grid>

                  <Grid xs={6}>
                    {" "}
                    <Typography
                      className="container_right_padding"
                      variant="h6"
                    >
                      {"₹" + total}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={6} sx={{ paddingTop: "10px" }}>
                <img
                  src={location.state.image}
                  alt="Movie Poster"
                  width={100}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="content-height"></Grid>
          <Grid className="centered-text">
            <ButtonComp
              buttonName={"Confirm"}
              onClick={() => finalConfirmation()}
              type={"submit"}
              variant={"contained"}
              customStyle={{ backgroundColor: "red", color: "white" }}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* 
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.id}>{seat.seatNumber}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => handleBooking()}>Book Seats</button> */}
    </Grid>
  );
};

export default Booking_Screen;
