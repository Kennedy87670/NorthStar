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
import foundersData from "./foundersData";
import Cards from "../../reuseable/Cards";

import CustomButton from "../../reuseable/CustomButton";
import freshbluesuitguy from "../../../images/freshbluesuitguy.png";

import blondprettyladyjean from "../../../images/blondprettyladyjean.png";

const Founders = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "90%",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ flexGrow: 1, height: 600, marginBottom: 20 }}>
          <Grid container spacing={10}>
            <Grid xs={6}>
              <img src={blondprettyladyjean} alt="" />
            </Grid>
            <Grid xs={6}>
              <img src={freshbluesuitguy} alt="" />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ height: 920, marginTop: 40 }}>
          <Stack
            direction="column"
            alignItems="center"
            sx={{ marginBottom: 10 }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 36, paddingY: 15 }}>
              The Founders
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {foundersData.map((founder, index) => (
                <Grid xs={3} key={index}>
                  <Cards img={founder.img} cardTitle={founder.cardTitle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Founders;
