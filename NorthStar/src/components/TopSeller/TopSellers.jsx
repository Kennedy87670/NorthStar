import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../reuseable/Cards";
import CustomButton from "../reuseable/CustomButton";

// Import cardDetailsBottom array or define it here
import cardDetails from "./cardDetails";

const TopSellers = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "90%",
        height: 920,
        marginRight: 2,
      }}
    >
      <Box sx={{ height: 920, marginTop: 20 }}>
        <Stack direction="column" alignItems="center" sx={{ marginBottom: 10 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 36 }}>
            TopSellers
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 20,
              marginTop: 3,
              color: "#555555",
            }}
          >
            Browse our top-selling products
          </Typography>
        </Stack>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cardDetails.slice(8, 12).map((card) => (
              <Grid key={card.id} xs={3}>
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
              marginLeft: -8,
            }}
          >
            <CustomButton background="#024EB2" color="#fff">
              {" "}
              SHOP NOW
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TopSellers;
