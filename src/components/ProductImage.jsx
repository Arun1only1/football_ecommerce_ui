import { Box, Stack } from "@mui/material";
import React from "react";

const ProductImage = (props) => {
  return (
    <Box sx={{ width: "50%" }}>
      <img
        src={props.imageUrl}
        alt=""
        style={{
          width: "500px",
        }}
      />
    </Box>
  );
};

export default ProductImage;
