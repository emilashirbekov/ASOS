import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { notify, notifyAlert, notifyError } from "../../components/Taostify";

const AddProductPage = () => {
  const { addProduct } = useProduct();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    let obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim() ||
      !formValue.category.trim()
    ) {
      notifyError("Заполните поля !");
      return;
    }
    notify(`Товар добавлен!`);
    addProduct(formValue);
    // navigate("/dropped");
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextField
          value={formValue.title}
          onChange={(e) => handleChange(e)}
          name="title"
          label="Title"
          variant="outlined"
          InputProps={{
            style: { fontSize: "1.6rem", marginBottom: "2rem" },
          }}
          inputProps={{
            style: { fontSize: "1.6rem", padding: "10px 14px" },
          }}
          InputLabelProps={{
            style: { fontSize: "1.5rem" },
          }}
        />
        <TextField
          value={formValue.description}
          onChange={(e) => handleChange(e)}
          name="description"
          label="Description"
          variant="outlined"
          InputProps={{
            style: { fontSize: "1.6rem", marginBottom: "2rem" },
          }}
          inputProps={{
            style: { fontSize: "1.6rem", padding: "10px 14px" },
          }}
          InputLabelProps={{
            style: { fontSize: "1.5rem" },
          }}
        />
        <TextField
          value={formValue.price}
          onChange={(e) => handleChange(e)}
          name="price"
          label="Price"
          variant="outlined"
          InputProps={{
            style: { fontSize: "1.6rem", marginBottom: "2rem" },
          }}
          inputProps={{
            style: { fontSize: "1.6rem", padding: "10px 14px" },
          }}
          InputLabelProps={{
            style: { fontSize: "1.5rem" },
          }}
        />
        <TextField
          value={formValue.image}
          onChange={(e) => handleChange(e)}
          name="image"
          label="Image"
          variant="outlined"
          InputProps={{
            style: { fontSize: "1.6rem", marginBottom: "2rem" },
          }}
          inputProps={{
            style: { fontSize: "1.6rem", padding: "10px 14px" },
          }}
          InputLabelProps={{
            style: { fontSize: "1.5rem" },
          }}
        />
        <FormControl fullWidth>
          <InputLabel
            htmlFor="my-select"
            sx={{ fontSize: "1.4rem" }}
            id="demo-simple-select-label"
          >
            Category
          </InputLabel>
          <Select
            sx={{ fontSize: "1.4rem" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            name="category"
            value={formValue.category}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem sx={{ fontSize: "1.4rem" }} value={"jeans"}>
              Jeans
            </MenuItem>
            <MenuItem sx={{ fontSize: "1.4rem" }} value={"shoes"}>
              Shoes
            </MenuItem>
            <MenuItem sx={{ fontSize: "1.4rem" }} value={"t-shirt"}>
              T shirt
            </MenuItem>
          </Select>
        </FormControl>
        <Button sx={{ fontSize: "1.6rem" }} type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
