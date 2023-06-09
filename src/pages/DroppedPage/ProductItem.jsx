import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import "./ProductItem.css";
import { Delete, Edit } from "@mui/icons-material";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useThings } from "../../contexts/BagContextProvider";
import CommentIcon from "@mui/icons-material/Comment";
import Rating from "../../components/Rating/Rating";

const ProductItem = ({ item }) => {
  const { title, description, image, price, id, rating } = item;
  const navigate = useNavigate();

  const { deleteProduct } = useProduct();
  const { addProductToCart, isAlreadyCart, deleteFromCart } = useCart();
  const { isAlreadyThings, deleteFromThings, addProductToThings } = useThings();

  const handleEditClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      {isAlreadyThings(item.id) ? null : (
        <Card className="card">
          <div className="image-container">
            <CardMedia
              sx={{ maxHeight: 300 }}
              component="img"
              alt="Clothes"
              image={image}
            />
            <div className="icon-container">
              {isAlreadyCart(item.id) ? (
                <IconButton
                  onClick={() => deleteFromCart(item.id)}
                  color="balck"
                >
                  <FavoriteIcon />
                </IconButton>
              ) : (
                <IconButton onClick={() => addProductToCart(item)}>
                  <FavoriteBorderIcon />
                </IconButton>
              )}
            </div>
          </div>
          <CardContent>
            <div
              className="rating"
              style={{ marginLeft: "3rem", marginBottom: "1rem" }}
            >
              <Rating rating={rating} id={id} />
            </div>
            <Typography
              sx={{ fontSize: "1.8rem", fontWeight: "700" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: "700",
                minHeight: "5.5rem",
              }}
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
              ${price}
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

            <IconButton aria-label="Add to favorites" className="favorite-icon">
              <CommentIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductItem;
