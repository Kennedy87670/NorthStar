import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Stack, Typography, Grid, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import cardDetails from "../homepage/cardDetails";

import CustomButton from "../reuseable/CustomButton";
import BasicTabs from "./CustomTabPanel";
import SelectSize from "./SelectSize";

const ProductView = () => {
  const [value, setValue] = useState(0);

  const [tabb, setTabb] = React.useState("1");

  const handleSwitch = (event, newValue) => {
    setValue(newValue);
  };

  const params = useParams();
  const product = cardDetails.find((item) => item.id === Number(params.id));

  if (!product) {
    // Handle the case where no product is found
    return <div>No product found with ID {params.id}</div>;
  }

  return (
    <Box sx={{ height: 1100 }} pt={10}>
      <Container
        maxWidth={false}
        sx={{
          width: "80%",
          paddingX: 100,
          paddingY: 0,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ height: 685 }}>
            <img src={product.img} alt={product.alt} height={685} />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 36,
                      lineHeight: 1.3,
                      color: "#1D1D1D",
                    }}
                  >
                    {product.cardTitle}
                  </Typography>
                </Box>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 24,
                      lineHeight: 1.3,
                      color: "#024E82",
                    }}
                  >
                    {product.cardPrice}
                  </Typography>
                </Box>

                <Box sx={{ width: 550 }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.3,
                      color: "#555555",
                    }}
                  >
                    A classic t-shirt never goes out of style. This is our most
                    premium collection of shirt. This plain white shirt is made
                    up of pure cotton and has a premium finish.
                  </Typography>
                </Box>

                <Box>
                  <SelectSize />
                </Box>

                <Box paddingTop={3}>
                  <CustomButton color="#fff" background="#024E82">
                    ADD TO CART
                  </CustomButton>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Box pt={10}>
          <BasicTabs />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductView;
