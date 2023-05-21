import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import "./ProductItem.css";
import { Delete, Edit } from "@mui/icons-material";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { title, description, image, price, id } = item;
  const navigate = useNavigate();

  const { deleteProduct } = useProduct();

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <Card className="card">
        <div className="image-container">
          <CardMedia component="img" alt="Clothes" image={image} />
          <div className="icon-container">
            <IconButton aria-label="Add to favorites" className="favorite-icon">
              <FavoriteIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton aria-label="Add to cart" className="cart-icon">
              <ShoppingCartIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
        <CardContent>
          <Typography
            sx={{ fontSize: "1.8rem", fontWeight: "700" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: "1.4rem", fontWeight: "700" }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Typography
            sx={{ fontSize: "1.4rem", fontWeight: "700" }}
            variant="body2"
            color="text.secondary"
          >
            {price}
          </Typography>
          <IconButton
            aria-label="Add to cart"
            className="cart-icon"
            onClick={handleEditClick}
          >
            <Edit sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            onClick={() => deleteProduct(id)}
            aria-label="Add to favorites"
            className="favorite-icon"
          >
            <Delete sx={{ fontSize: 20 }} />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductItem;
