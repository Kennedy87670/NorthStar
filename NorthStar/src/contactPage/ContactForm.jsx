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
import TextField from "@mui/material/TextField";
import CustomButton from "../components/reuseable/CustomButton";

const ContactForm = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "80%",
        paddingX: 100,
        paddingY: 0,
      }}
    >
      <Stack direction="row" alignItems="stretch" spacing={10} paddingTop={20}>
        <Box flex={3}>
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
                  width: 554,
                  marginBottom: 5,
                }}
              >
                We would love to hear from you.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 16,
                  width: 788,
                  marginBottom: 4,
                }}
              >
                If you have any query or any type of suggestion, you can contact
                us here. We would love to hear from you.
              </Typography>
            </Box>
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.4,
                      color: "#555555",
                    }}
                  >
                    Name
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{ width: 400, height: 58 }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.4,
                      color: "#555555",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{ width: 400, height: 58 }}
                  />
                </Box>
              </Stack>
            </Box>
            <Box sx={{ width: 820, height: 500 }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.4,
                  color: "#555555",
                }}
              >
                Message
              </Typography>

              <TextField
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  style: {
                    width: 820,
                    height: 300,
                  },
                }}
              />

              <Box paddingTop={3}>
                <CustomButton color="#fff" background="#024E82">
                  SEND MESSAGE
                </CustomButton>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box flex={1}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Box>
              <Box marginBottom={20}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 24,
                    lineHeight: 1.4,
                    color: "#1D1D1D",
                  }}
                >
                  Visit Us
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.3,
                    color: "#555555",
                    width: 350,
                  }}
                >
                  UET Lahore, Punjab, Pakistan Phone: +923039898987
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 24,
                    lineHeight: 1.4,
                    color: "#1D1D1D",
                  }}
                >
                  Get In Touch
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.3,
                    color: "#555555",
                    width: 350,
                    marginBottom: 2, // Add margin to the bottom of the text
                  }}
                >
                  You can get in touch with us on this provided email.
                  <span style={{ display: "block", marginTop: 20 }}>
                    Email: hmjawad087@gmail.com
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box></Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactForm;
