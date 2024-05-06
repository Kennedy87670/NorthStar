import React from "react";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import Container from "@mui/material/Container";
import CustomButton from "../reuseable/CustomButton";

const Buy = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "90%",
      }}
    >
      <Box sx={{ flexGrow: 1, height: 429, paddingLeft: 8 }}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={9}>
            <Box
              sx={{
                background: "#222",
                height: 429,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ paddingX: 20, paddingY: 12 }}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Typography
                    sx={{
                      fontSize: 32,
                      fontWeight: 400,
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                      textAlign: "center",
                      width: 368,
                      color: "#fff",
                      wordSpacing: "2px",
                    }}
                  >
                    PEACE OF MIND
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: 1.4,

                      textAlign: "center",
                      width: 406,
                      color: "#fff",
                    }}
                  >
                    A one-stop platform for all your fashion needs, hassle-free.
                    Buy with a peace of mind.
                  </Typography>

                  <CustomButton color="#024E82" background="#ffff">
                    BUY NOW
                  </CustomButton>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid xs={7}>
            <Box sx={{ background: "#222", height: 429 }}>
              <Box sx={{ paddingX: 20, paddingY: 12 }}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Typography
                    sx={{
                      fontSize: 32,
                      fontWeight: 400,
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                      textAlign: "center",
                      width: 368,
                      color: "#fff",
                      wordSpacing: "2px",
                    }}
                  >
                    Buy 2 Get 1 Free
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: 1.4,

                      textAlign: "center",
                      width: 406,
                      color: "#fff",
                    }}
                  >
                    End of season sale. Buy any 2 items of your choice and get 1
                    free.
                  </Typography>

                  <CustomButton color="#024E82" background="#ffff">
                    BUY NOW
                  </CustomButton>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Buy;
