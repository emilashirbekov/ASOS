import * as React from "react";
import Bonus from "../../components/Bonus/Bonus";
import { useCart } from "../../contexts/CartContextProvider";
import { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useThings } from "../../contexts/BagContextProvider";
import { notify, notifyAlert } from "../../components/Toastify";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Favourites = () => {
  const { cart, getCart, deleteFromCart } = useCart();
  const { addProductToThings } = useThings();

  useEffect(() => {
    getCart();
  }, []);

  const [size, setSize] = useState({ razmer: "", id: "" });
  function handleChange(e) {
    setSize({ razmer: e.target.value, id: e.target.id });
  }
  function rsize(raz) {
    switch (raz) {
      case "1":
        return "XL";

      case "2":
        return "L";
      case "3":
        return "ML";
      case "4":
        return "R";
      default:
        return;
    }
  }
  const lastChar = size.razmer.charAt(size.razmer.length - 1);
  return (
    <>
      <Bonus />
      <div
        style={{
          backgroundColor: "#eee",
          fontSize: "2.4rem",
          textAlign: "center",
          fontWeight: "700",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        SAVED ITEMS
      </div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
        spacing={3}
      >
        {cart.products.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <ProductionQuantityLimitsIcon
              sx={{ fontSize: "6.8rem", fontWeight: "bold" }}
            />
            <h2
              style={{
                fontSize: "3.8rem",
                fontWeight: "bolder",
                marginTop: "2rem",
              }}
            >
              There's not items in your favourites
            </h2>
          </div>
        ) : (
          cart.products.map((thing) => (
            <Grid item key={thing.id} lg={3} md={4} sm={6} xs={12}>
              <Card sx={{ minWidth: 345, position: "relative" }}>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                  }}
                  onClick={() => deleteFromCart(thing.id)}
                >
                  <DeleteOutlineIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
                <CardMedia
                  component="img"
                  height="400"
                  image={thing.image}
                  alt="Paella dish"
                />

                <CardContent>
                  <Typography variant="h5" color="black" sx={{ minHeight: 60 }}>
                    {thing.description}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="black"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "darkred",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  >
                    NOW : ${thing.price}
                  </Typography>
                  <select
                    name=""
                    id={thing.id}
                    placeholder="size"
                    style={{ width: "100%", height: "40px", fontSize: "25px" }}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value={thing.id + "0"}>SELECT SIZE</option>
                    <option value={thing.id + "1"}>XL</option>
                    <option value={thing.id + "2"}>L</option>
                    <option value={thing.id + "3"}>M</option>
                    <option value={thing.id + "4"}>R</option>
                  </select>
                  <Button
                    id={thing.id}
                    onClick={() => {
                      if (
                        thing.id == size.id &&
                        size.razmer.charAt(size.razmer.length - 1) != "0"
                      ) {
                        let obj = JSON.stringify(thing);
                        obj = JSON.parse(obj);
                        obj.size = rsize(
                          size.razmer.charAt(size.razmer.length - 1)
                        );
                        console.log(obj);
                        addProductToThings(obj);
                        deleteFromCart(thing.id);
                      } else {
                        alert("Выберите размер!");
                      }
                    }}
                    sx={
                      thing.id == size.id && lastChar != 0
                        ? {
                            backgroundColor: "black",
                            marginTop: "20px",
                            color: "white",
                            width: "100%",
                            height: "35px",
                            fontSize: "25px",
                          }
                        : {
                            backgroundColor: "#eee",
                            marginTop: "20px",
                            color: "white",
                            width: "100%",
                            height: "35px",
                            fontSize: "25px",
                          }
                    }
                  >
                    MOVE TO BAG
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default Favourites;
