import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SellerProductList = () => {
  const navigate = useNavigate();

  const goToAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <Box>
      <Button variant="contained" color="success" onClick={goToAddProduct}>
        Add product
      </Button>
    </Box>
  );
};

export default SellerProductList;
