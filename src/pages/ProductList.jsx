import { Box } from "@mui/material";
import React from "react";
import BuyerProductList from "./BuyerProductList";
import SellerProductList from "./SellerProductList";

const ProductList = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <Box>
      {userRole === "buyer" ? <BuyerProductList /> : <SellerProductList />}
    </Box>
  );
};

export default ProductList;
