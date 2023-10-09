import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import image1 from "../Assests/image/ad_image/1696064777807_web.jpg";
import image2 from "../Assests/image/ad_image/adv2.jpeg";
import image3 from "../Assests/image/ad_image/1693899252341_inoxdesktop.jpg";
import image4 from "../Assests/image/ad_image/1695984008899_icccricketwcoctdesktop.jpg";
import image5 from "../Assests/image/ad_image/1695986750593_lolladesktop.jpg";

const images = [image1, image2, image3, image4, image5];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <Grid container spacing={2} alignItems="center">
      {/* <Grid xs={1}></Grid> */}
      <Grid item xs={12}>
        <div
          style={{
            height: "300px",
            overflow: "hidden",
            // borderRadius: '30px',
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${images.length * 90}%`,
              transform: `translateX(-${
                currentIndex * (100 / images.length)
              }%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  // paddingLeft:"20px",
                  flex: `0 0 ${100 / images.length}%`,
                  scrollSnapAlign: "start",
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "97%",
                    height: "250px",
                    objectFit: "fill",
                    borderRadius: "30px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CustomCarousel;
