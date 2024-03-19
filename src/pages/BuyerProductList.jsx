import React, { useState } from "react";
import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useQuery } from "react-query";
import $axios from "../lib/axios.instance";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

const BuyerProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchText } = useSelector((state) => state.product);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["buyer-product-list", currentPage, searchText],
    queryFn: async () => {
      return await $axios.post("/product/list/buyer", {
        page: currentPage,
        limit: 6,
        searchText: searchText,
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
      <Stack sx={{ margin: "4rem", alignItems: "flex-end" }}>
        <SearchBar />
      </Stack>

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
