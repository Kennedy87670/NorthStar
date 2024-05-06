import React from "react";
import Grid from "@mui/system/Unstable_Grid";
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
import commas from "/src/assets/commas.png";

const TestimonaLCard = ({ img, description, name }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "70%",
      }}
    >
      <Box marginBottom={20}>
        <Grid container spacing={3}>
          <Grid xs={3}>
            <img src={img} alt="" width={210} />
          </Grid>
          <Grid xs={9}>
            <Stack
              paddingLeft={15}
              direction="column"
              justifyContent="space-around"
              alignItems="flex-start"
              spacing={2}
            >
              <Box>
                <img src={commas} alt="" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 400,
                    color: "#555555",
                    width: 663,
                  }}
                >
                  {description}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: 21, fontWeight: 700, color: "#1D1D1D" }}
                >
                  {name}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TestimonaLCard;
