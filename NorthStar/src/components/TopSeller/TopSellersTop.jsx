import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";
import Cards from "../reuseable/Cards";

import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import cardDetails from "./cardDetails";

const TopSellersTop = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "90%",
        height: 920,
        marginRight: 2,
        marginTop: 10,
      }}
    >
      <Box sx={{ height: 920 }}>
        <Stack
          direction="column"
          alignItems="center"
          sx={{ marginBottom: 10, marginLeft: -6 }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 36 }}>
            Discover NEW Arrivals
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 20,
              marginTop: 3,
              color: "#555555",
            }}
          >
            Recently added shirts!
          </Typography>
        </Stack>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cardDetails.slice(0, 8).map((card) => (
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
      </Box>
    </Container>
  );
};

export default TopSellersTop;
