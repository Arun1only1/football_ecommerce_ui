import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import snackbarReducer from "./slices/snackbarSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    snackbar: snackbarReducer,
  },
});

export default store;
