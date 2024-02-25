import $axios from "./axios.instance";

export const addProduct = async (values) => {
  return await $axios.post("/product/add", values);
};

export const getProductDetails = async (id) => {
  return await $axios.get(`/product/details/${id}`);
};
