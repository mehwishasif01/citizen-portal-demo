import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Citizen Portal
        </Typography>
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          {/* <Button component={Link} to="/search" color="inherit">
            Search
          </Button> */}
          <Button component={Link} to="/services" color="inherit">
            Services
          </Button>
          <Button component={Link} to="/faqs" color="inherit">
            FAQs
          </Button>
          {/* <Button component={Link} to="/contact" color="inherit">
            Contact Us
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
