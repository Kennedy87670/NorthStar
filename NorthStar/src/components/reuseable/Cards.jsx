import { CardActionArea, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { useLocation } from "react-router-dom";

const Cards = ({ img, alt, cardTitle, cardPrice, openProduct }) => {
  const location = useLocation();
  const initials = location.state && location.state.initials;

  const style = {
    cardPrice: cardPrice || "transparent",
  };
  // initials ?? console.log(initials);
  return (
    <Card
      sx={{ maxWidth: 315, height: 432, border: "none", boxShadow: "none" }}
    >
      <CardActionArea
        onClick={() => {
          openProduct();
        }}
      >
        <CardMedia
          component="img"
          height="342"
          width="295"
          image={img}
          alt={alt}
        />
        <CardContent>
          <Stack direction="column" alignItems="center">
            <Typography
              sx={{ fontSize: 16, fontWeight: 800, color: "#1D1D1D" }}
            >
              {cardTitle}
            </Typography>

            <Typography
              style={style}
              sx={{ fontSize: 16, fontWeight: 400, color: "#024E82" }}
            >
              {cardPrice}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
