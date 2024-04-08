import DehazeIcon from "@mui/icons-material/Dehaze";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar
      position="static"
      sx={{
        height: 111,
        justifyContent: "center",
        background: "#fff",
        color: "#222",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "85%",
          paddingX: 100,
          paddingY: 0,
        }}
      >
        <StyledToolbar>
          <Typography variant="h4" sx={{ paddingLeft: 2 }}>
            <NavLink to="/" style={{ textDecoration: "none", color: "#222" }}>
              NorthStar
            </NavLink>
          </Typography>
          <Box>
            <List sx={{ display: "flex", gap: 6 }}>
              <ListItem>
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                  <Link to="/about" className="nav-link">
                    ABOUT
                  </Link>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  sx={{
                    width: "100px !important",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  <Link to="/contact" className="nav-link">
                    CONTACT US
                  </Link>
                </Typography>
              </ListItem>
            </List>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            <PersonIcon />
            <Badge badgeContent={4}>
              <LocalMallIcon />
            </Badge>
            <DehazeIcon />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
