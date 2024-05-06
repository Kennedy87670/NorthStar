import React from "react";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
} from "@mui/material";
import Container from "@mui/material/Container";
import TestimonaLCard from "../reuseable/TestimonaLCard";

import whitehshirtglassesguy from "../../images/whitehshirtglassesguy.png";
import redblondewomancircle from "../../images/redblondewomancircle.png";
import brownsuitwomancircle from "../../images/brownsuitwomancircle.png";

const Testimonials = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,

          // height: "100vh", // Adjust the height as needed
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1.3,
          }}
        >
          Testimonials
        </Typography>
      </Box>
      <TestimonaLCard
        img={redblondewomancircle}
        description="Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries."
        name="Stacy"
      />
      <TestimonaLCard
        img={brownsuitwomancircle}
        description="I ordered 5 shirts from them and received them in no time. The customer support was awesome!"
        name="Tiffany"
      />
      <TestimonaLCard
        img={whitehshirtglassesguy}
        description="I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again."
        name="James"
      />
    </Container>
  );
};

export default Testimonials;
