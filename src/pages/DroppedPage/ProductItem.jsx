import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProductItem = ({ item }) => {
  const { title, description, image } = item;

  return (
    <div>
      <Card className="card">
        <CardMedia component="img" alt="Clothes" image={image} />
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductItem;
