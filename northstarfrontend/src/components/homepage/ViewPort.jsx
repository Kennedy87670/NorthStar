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

// import "./viewport.css";
import brownlady from "../../images/brownlady.png";

import PeaceShirt from "../../images/peachshirt.png";
import CustomButton from "../reuseable/CustomButton";
import Grid from "@mui/system/Unstable_Grid";

const ViewPort = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 648,
        backgroundImage: `url(${PeaceShirt})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "90%",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                height="100%"
                sx={{ paddingY: 13, paddingRight: 40 }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 48,
                      fontWeight: 800,
                      lineHeight: 1.5,
                      textTransform: "uppercase",
                      textAlign: "center",
                      width: 550,
                      color: "#fff",
                    }}
                  >
                    stylist picks beat the heat
                  </Typography>
                </Box>
                <Box>
                  <CustomButton color="#fff" border="#fff">
                    SHOP NOW
                  </CustomButton>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ViewPort;
