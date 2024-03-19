import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        height: "70px",
        width: "100%",
        background: "#9D76C1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "#fff" }}>
        Copyright @ Nepal mart 2024
      </Typography>
    </Box>
  );
};

export default Footer;
