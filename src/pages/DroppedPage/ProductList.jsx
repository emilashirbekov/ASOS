import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { Box, Grid } from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      marginTop={"7rem"}
      marginBottom={"5rem"}
    >
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        gap={"6rem"}
      >
        {products.map((product) => (
          <Grid
            key={product.id}
            display={"flex"}
            justifyContent={"center"}
            item
            className="card__body"
          >
            <ProductItem item={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
