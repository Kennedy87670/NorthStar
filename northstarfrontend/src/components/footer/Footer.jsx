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
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import paypal from "/src/assets/PayPal.png";
import visa from "/src/assets/visa.png";
import visaElectron from "/src/assets/visaElectron.png";
import MasterCard from "/src/assets/MasterCard.png";

const Footer = () => {
  return (
    <Box sx={{ background: "#FBFBFB" }}>
      <Container
        maxWidth={false}
        sx={{
          width: "85%",
          paddingX: 100,
          paddingY: 0,
        }}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={4}
            padding={10}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                  COMPANY INFO
                </Typography>
              </Box>

              <Box sx={{ marginTop: 5 }}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Latest Posts
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Contact Us
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Shop
                </Typography>
              </Box>
            </Stack>

            {/* help links */}
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 700, marginLeft: -3 }}
                >
                  HELP LINKS
                </Typography>
              </Box>

              <Box sx={{ marginTop: 5 }}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Tracking
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Order Status
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Delivery
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Shipping Info
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  FAQ
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 700, marginLeft: -3 }}
                >
                  {" "}
                  USEFUL LINKS
                </Typography>
              </Box>

              <Box sx={{ marginTop: 5 }}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Special Offers
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Gift Cards
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Advertising
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, marginBottom: 1 }}
                >
                  Terms of Use
                </Typography>
              </Box>
            </Stack>

            {/* Get in the know */}
            <Box>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                  {" "}
                  Get in the Know
                </Typography>
              </Box>

              <Box sx={{ marginTop: 5 }}>
                <TextField
                  id="standard-basic"
                  label="Enter email"
                  variant="standard"
                />
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* below */}
        <Box borderTop={0.5}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={2}
          >
            <Box sx={{ paddingTop: 4 }}>
              <Typography
                sx={{ fontSize: 14, color: "#555555", fontWeight: 400 }}
              >
                ©2020 NorthDtar eCommerce
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                spacing={2}
              >
                <Typography
                  sx={{ fontSize: 14, color: "#555555", fontWeight: 400 }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  sx={{ fontSize: 14, color: "#555555", fontWeight: 400 }}
                >
                  Terms & Conditions
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <img src={visa} alt="" />
                <img src={MasterCard} alt="" />
                <img src={paypal} alt="" />
                <img src={visaElectron} alt="" />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
