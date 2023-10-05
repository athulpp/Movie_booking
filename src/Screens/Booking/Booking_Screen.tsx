import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../Redux/actions";
import { Box, Grid, Typography } from "@mui/material";
import Header from "../../Common/Header";
import "./book.scss";
interface bookData {
  id: any;
  seatNumber: any;
  status: any;
}

const Booking_Screen = () => {
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
    }

    // Save the updated movie data to local storage
    sessionStorage.setItem(localStorageKey, JSON.stringify(updatedMovieData));

    // Log the selected seats (you can replace this with your actual booking logic)
    console.log("Selected Seats:", selectedSeats);
  };
  const seatBoxStyle = {};
  return (
    <Grid>
      <Grid>
        <Header />
        <Grid className="content-height"></Grid>
        <Grid container xs={12} className="content-row">
          <Grid item xs={6} sm={4} md={4} className="booking_margin">
            <Typography variant="h5">{location.state.title}</Typography>
            <Grid className="content-height"></Grid>
            <img src={location.state.image} height={250} width={200} />
          </Grid>
          <Grid container spacing={2}>
            {location.state.seats.map((seat: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  style={{
                    width: "20%", // Set the width to 20% to fit 5 boxes in a row
                    boxSizing: "border-box",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    margin: "5px",
                    padding: "10px",
                  }}
                >
                  {seat.seatNumber}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <h2>{location.state.title}</h2>
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
            {seat.seatNumber}
          </div>
        ))}
      </div>

      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.id}>{seat.seatNumber}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => handleBooking()}>Book Seats</button>
    </Grid>
  );
};

export default Booking_Screen;
