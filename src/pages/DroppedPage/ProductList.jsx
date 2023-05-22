import React, { useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import ProductItem from "./ProductItem";
import { LIMIT } from "../../helpers/const";
import { useSearchParams } from "react-router-dom";
import { filterProduct } from "../../helpers/const";

const ProductList = () => {
  const { products, getProducts, pageTotalCount } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        q: search,
        _page: 1,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: 1,
        _limit: LIMIT,
      });
    }
  }, [search, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        q: search,
        _page: page,
        _limit: LIMIT,
      });
    } else {
      setSearchParams({
        q: search,
        category: category,
        _page: page,
        _limit: LIMIT,
      });
    }
  }, [page]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

  return (
    <div>
      <Box marginTop={"5rem"} marginBottom={"5rem"}>
        <Box sx={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "2rem" }}>ASOS Clothes</h2>
          <p style={{ fontSize: "1.6rem", marginBottom: "2rem" }}>
            Basic T-shirt and jeans? Now we’re cooking. If you’re all about
            styles you can mix-and-match, <br /> scroll our ASOS basics edit for
            basic hoodies and joggers that’ll become your Monday-Sunday ‘drobe
          </p>
          <TextField
            sx={{ width: "100rem" }}
            label="Search..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            maxWidth: "140rem",
            margin: "2rem auto",
            display: "flex",
            gap: "3rem",
            background: "#eee",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <FormControl sx={{ width: "20rem", marginBottom: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Style</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Style"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"all"}>Skinny</MenuItem>
              <MenuItem value={"jeans"}>Regular</MenuItem>
              <MenuItem value={"t-shirt"}>Oversized</MenuItem>
              <MenuItem value={"shoes"}>Denim</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "20rem", marginBottom: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Sort"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"low"}>Price high to low</MenuItem>
              <MenuItem value={"high"}>Price low to high</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "20rem", marginBottom: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"jeans"}>Jeans</MenuItem>
              <MenuItem value={"t-shirt"}>T-shirt</MenuItem>
              <MenuItem value={"shoes"}>Shoes</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "20rem", marginBottom: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"black"}>Black</MenuItem>
              <MenuItem value={"pink"}>Pink</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"rose"}>Rose</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "20rem", marginBottom: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Product type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Product type"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"jeans"}>Jeans</MenuItem>
              <MenuItem value={"t-shirt"}>T-shirt</MenuItem>
              <MenuItem value={"shoes"}>Shoes</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "20rem", marginBottom: "1rem" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"jeans"}>Jeans</MenuItem>
              <MenuItem value={"t-shirt"}>T-shirt</MenuItem>
              <MenuItem value={"shoes"}>Shoes</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"center"}
          gap={"6rem"}
        >
          {filterProduct(products, category, search).map((product) => (
            <Grid key={product.id} item className="card__body">
              <ProductItem item={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(e, p) => setPage(p)}
        />
      </Box>
    </div>
  );
};

export default ProductList;
