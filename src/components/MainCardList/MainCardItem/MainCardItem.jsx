import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./MainCardItem.css";

export default function MainCardItem({ image, title, subtitle, onClick }) {
  return (
    <Card className="card" sx={{ cursor: "pointer" }} onClick={onClick}>
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
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}
