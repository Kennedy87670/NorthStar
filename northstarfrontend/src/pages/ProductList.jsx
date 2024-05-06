import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Cards from "../components/reuseable/Cards";

import cardDetails from "../components/homepage/cardDetails";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "85%",
      }}
    >
      <Box sx={{ flexGrow: 1, paddingTop: 10, paddingLeft: 7 }}>
        <Grid container spacing={2}>
          {cardDetails.map((card) => (
            <Grid xs={3} key={card.id}>
              <Cards
                img={card.img}
                cardTitle={card.cardTitle}
                cardPrice={card.cardPrice}
                alt={card.alt}
                openProduct={() => {
                  navigate(`/product/${card.id}`, {
                    state: {
                      initials: {
                        cardTitle: card.cardTitle,
                        cardPrice: card.cardPrice,
                      },
                    },
                  });
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
