import React, { useState } from "react";
import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useQuery } from "react-query";
import $axios from "../lib/axios.instance";
import Loader from "../components/Loader";

const BuyerProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["buyer-product-list", currentPage],
    queryFn: async () => {
      return await $axios.post("/product/list/buyer", {
        page: currentPage,
        limit: 6,
      });
    },
  });

  const productList = data?.data?.productList;
  const numberOfPages = data?.data?.numberOfPages;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
      <Stack alignItems="center" mt="1.5rem">
        <Pagination
          count={numberOfPages}
          page={currentPage}
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
        />
      </Stack>
    </>
  );
};

export default BuyerProductList;
