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

import Hero from "/src/components/images/Hero.png";

import Grid from "@mui/system/Unstable_Grid";

const AboutHero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 450,
        backgroundImage: `url(${Hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginBottom: 15,
      }}
    ></Box>
  );
};

export default AboutHero;
