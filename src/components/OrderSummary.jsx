import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const OrderSummary = ({ orderSummary }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "2rem",
        maxHeight: "250px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Typography variant="h5">Order summary</Typography>
      {orderSummary.map((item, index) => {
        return (
          <Stack
            direction="row"
            spacing={2}
            key={index}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography sx={{ textTransform: "capitalize" }}>
              {item?.name}:
            </Typography>
            <Typography>Rs.{item?.value}</Typography>
          </Stack>
        );
      })}

      <Button variant="contained" color="success" fullWidth>
        Proceed to checkout
      </Button>
    </Box>
  );
};

export default OrderSummary;
