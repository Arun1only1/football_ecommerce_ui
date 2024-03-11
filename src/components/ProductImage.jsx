import { Box, Stack } from "@mui/material";
import React from "react";
import { fallbackImage } from "../constant/general.constant";

const ProductImage = (props) => {
  return (
    <Box sx={{ width: "50%" }}>
      <img
        src={props.imageUrl || fallbackImage}
        alt=""
        style={{
          width: "500px",
        }}
      />
    </Box>
  );
};

export default ProductImage;
