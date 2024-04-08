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

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SupportIcon from "@mui/icons-material/Support";
import IconItem from "../reuseable/IconItem";

const IconsComponent = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "90%",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ marginTop: 30, marginBottom: 20, marginLeft: 3 }}
      >
        <IconItem
          icon={LocalShippingIcon}
          iconTitle="FREE SHIPPING"
          iconDescription=" Enjoy free shipping on all orders above $100"
        />
        <IconItem
          icon={SupportIcon}
          iconTitle="SUPPORT 24/7"
          iconDescription=" Our support team is there to help you for queries"
        />
        <IconItem
          icon={RotateLeftIcon}
          iconTitle="30 DAYS RETURN"
          iconDescription=" Simply return it within 30 days for an exchange."
        />
        <IconItem
          icon={FingerprintIcon}
          iconTitle="100% PAYMENT SECURE"
          iconDescription=" Our payments are secured with 256 bit encryption"
        />
      </Grid>
    </Container>
  );
};

export default IconsComponent;

{
  /* <Box sx={{ flexGrow: 1 }}>
  </Box> */
}
{
  /* <Grid container spacing={3}>
          <Grid xs={3}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Box>
                <LocalShippingIcon
                  sx={{
                    color: "#024E82",
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, width: 109 }}>
                  FREE SHIPPING
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    marginTop: 1,
                    lineHeight: 1.4,
                    width: 189,
                  }}
                >
                  Enjoy free shipping on all orders above $100
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={3}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Box>
                <LocalShippingIcon
                  sx={{
                    color: "#024E82",
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, width: 109 }}>
                  FREE SHIPPING
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    marginTop: 1,
                    lineHeight: 1.4,
                    width: 189,
                  }}
                >
                  Enjoy free shipping on all orders above $100
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={3}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Box>
                <LocalShippingIcon
                  sx={{
                    color: "#024E82",
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, width: 109 }}>
                  FREE SHIPPING
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    marginTop: 1,
                    lineHeight: 1.4,
                    width: 189,
                  }}
                >
                  Enjoy free shipping on all orders above $100
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid xs={3}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Box>
                <LocalShippingIcon
                  sx={{
                    color: "#024E82",
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, width: 109 }}>
                  FREE SHIPPING
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                    marginTop: 1,
                    lineHeight: 1.4,
                    width: 189,
                  }}
                >
                  Enjoy free shipping on all orders above $100
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid> */
}
