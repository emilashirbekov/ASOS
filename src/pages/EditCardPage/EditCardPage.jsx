import React, { useEffect, useState } from "react";
import "./EditCardPage.css";
import { Button, TextField } from "@mui/material";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "./EditCardPage.css";

const EditCardPage = () => {
  const { oneProduct, getOneProduct, editProduct } = useProduct();
  const params = useParams();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setFormValue(oneProduct);
    }
  }, [oneProduct]);

  const handleChange = (e) => {
    let obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim()
    ) {
      alert("fill the fields");
      return;
    }

    editProduct(formValue, params.id);
    navigate("/dropped");
  }

  return (
    <div className="edit">
      <div className="edit__body">
        <div className="edit__img">
          <img
            style={{
              maxWidth: "100%",
              height: "auto",
              margin: "4rem 0 4rem 0",
            }}
            src={formValue.image}
            alt=""
          />
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            width: "40%",
            margin: "4rem 0 4rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            value={formValue.title}
            onChange={(e) => handleChange(e)}
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
            name="description"
            label="Description"
            variant="outlined"
            value={formValue.description}
            onChange={(e) => handleChange(e)}
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
            name="price"
            label="Price"
            variant="outlined"
            value={formValue.price}
            onChange={(e) => handleChange(e)}
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
            name="image"
            label="image"
            variant="outlined"
            value={formValue.image}
            onChange={(e) => handleChange(e)}
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

          <Button type="submit" sx={{ fontSize: "1.4rem", display: "block" }}>
            Save changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditCardPage;
