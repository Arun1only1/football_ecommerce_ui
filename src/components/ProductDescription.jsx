import {
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";
import DeleteProductDialog from "./DeleteProductDialog";
import { useMutation, useQueryClient } from "react-query";
import $axios from "../lib/axios.instance";

const ProductDescription = (props) => {
  const [count, setCount] = useState(1);

  const params = useParams();
  const queryClient = useQueryClient();

  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();

  // to increase count
  const increaseCount = () => {
    if (count === props.quantity) {
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  // to decrease count
  const decreaseCount = () => {
    if (count === 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  const { isLoading, mutate } = useMutation({
    mutationKey: ["add-product-to-cart"],
    mutationFn: async () => {
      return await $axios.post("/cart/item/add", {
        productId: params?.id,
        orderedQuantity: count,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("get-cart-item-count");
    },
    onError: () => {
      console.log("errors");
    },
  });

  return (
    <Grid container direction="column" spacing={2} sx={{ width: "50%" }}>
      <Grid item>
        <Typography variant="h5">{props.name}</Typography>
      </Grid>

      <Grid item>
        <Chip
          label={props.brand}
          color="secondary"
          variant="outlined"
          className="product-brand-chip"
        />
      </Grid>

      <Grid item>
        <Typography textAlign="justify">{`${props.description}`}</Typography>
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography>Available quantity:</Typography>
          <Typography>{props.quantity}</Typography>
        </Stack>
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography>Price:</Typography>
          <Typography>{props.price}</Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Chip label={props.category} color="secondary" variant="outlined" />
      </Grid>

      <Grid item>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography>Free shipping</Typography>
          <Checkbox checked={props.freeShipping} color="warning" />
        </Stack>
      </Grid>

      {userRole === "buyer" && (
        <>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton onClick={decreaseCount} disabled={count === 1}>
                <RemoveIcon />
              </IconButton>
              <Typography>{count}</Typography>
              <IconButton
                onClick={increaseCount}
                disabled={props.quantity === count}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                mutate();
              }}
            >
              add to cart
            </Button>
          </Grid>
        </>
      )}

      {userRole === "seller" && (
        <>
          <Grid item>
            <Stack direction="row" spacing={4}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<EditIcon />}
                onClick={() => {
                  navigate(`/product/edit/${props._id}`);
                }}
              >
                <Typography> Edit product</Typography>
              </Button>

              <DeleteProductDialog />
            </Stack>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProductDescription;
