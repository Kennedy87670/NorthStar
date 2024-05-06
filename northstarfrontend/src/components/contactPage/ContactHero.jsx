import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
} from "@mui/material";

import Contact from "../../images/Contact.png";
import Grid from "@mui/system/Unstable_Grid";

const ContactHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 450,
        backgroundImage: `url(${Contact})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "90%",
        }}
      ></Container>
    </Box>
  );
};

export default ContactHero;
