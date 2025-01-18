import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#f1f1f1",
        color: "#333",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Citizen Portal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
