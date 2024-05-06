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

const IconItem = ({ icon: Icon, iconTitle, iconDescription }) => {
  return (
    <Grid xs={3}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Box>
          <Icon
            sx={{
              color: "#024E82",
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 700, width: 169 }}>
            {iconTitle}
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
            {iconDescription}
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default IconItem;
