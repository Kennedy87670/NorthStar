import React from "react";
import Box from "@mui/material/Box";

import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Cards from "../components/reuseable/Cards";

import cardDetails from "../components/homepage/cardDetails";

import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export default function ProductItems() {
  const navigate = useNavigate();
  return (
    <Box mt={10}>
      <Grid container spacing={2}>
        {cardDetails.map((card) => (
          <Grid item key={card.id} xs={3}>
            {/* Use "item" prop for Grid components */}
            <Cards
              img={card.img}
              cardTitle={card.cardTitle}
              cardPrice={card.cardPrice}
              alt={card.alt}
              openProduct={() => {
                navigate(`/product/${card.id}`, {
                  initials: {
                    cardTitle: card.cardTitle,
                    cardPrice: card.cardPrice,
                  },
                });
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
