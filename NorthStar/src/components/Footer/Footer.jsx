import React from "react";
import { Box } from "@mui/material";

import Container from "@mui/material/Container";
import { companyInfos, helpLinks, usefulLinks } from "./footerdata";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 16,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 12,
            },
          },
        ],
      },
    },
  });

  return (
    <Box>
      <Container>
        <ThemeProvider theme={theme}>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {/* <Box sx={{ display: "flex" }}> */}
            {/* {company info session} */}
            <Box>
              <Typography variant="body3"> Company Info</Typography>
              <List sx={{ listStyleType: "none", padding: 0 }}>
                {companyInfos.map((companyInfo) => (
                  <ListItem key={companyInfo.key}>
                    <Typography variant="body2">{companyInfo.title}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* help link sectiom */}
            <Box>
              <Typography variant="body3">Help Links</Typography>
              <List sx={{ listStyleType: "none", padding: 0 }}>
                {helpLinks.map((helplink) => (
                  <ListItem key={helplink.id}>
                    <Typography variant="body2">{helplink.title}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* useful links section */}
            <Box>
              <Typography variant="body3">Useful Links</Typography>
              <List sx={{ listStyleType: "none", padding: 0 }}>
                {usefulLinks.map((usefulLink) => (
                  <ListItem key={usefulLink.id}>
                    <Typography variant="body2">{usefulLink.title}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Typography variant="body3"> GET IN THE KNOW</Typography>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <TextField
                  id="email"
                  label="Enter email"
                  sx={{ width: "253px" }}
                />
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
            {/* </Box> */}
          </Stack>
        </ThemeProvider>
      </Container>
    </Box>
  );
};

export default Footer;
