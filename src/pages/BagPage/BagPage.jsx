import React, { useEffect, useState } from "react";
import "./BagPage.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import { useThings } from "../../contexts/BagContextProvider";
import { Button, TableCell } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { useCart } from "../../contexts/CartContextProvider";

const BagPage = () => {
  const { Things, getThings, changeProductCount, deleteFromThings } =
    useThings();
  const { addProductToCart } = useCart();
  function addProductToCartWS(obj) {
    delete obj.size;
    return obj;
  }

  useEffect(() => {
    getThings();
  }, []);
  const [thi, sethi] = useState(false);
  console.log(Things.products);

  const theme = useTheme();
  return (
    <div className="page">
      <div
        className="MainContainer"
        style={Things.products.length != 0 ? { marginLeft: "5%" } : null}
      >
        <div className="MainContainer__Left">
          <div className="MainContainerLefttitle">
            <h1 className="title__Bag">MY BAG</h1>
            <span className="Tittle__span">
              Items are reserved for 60 minutes
            </span>
          </div>
          <div className="Products__Bag" style={{ marginTop: "10px" }}>
            {Things.products.map((thing) => (
              <Card
                key={thing.id}
                sx={{
                  display: "flex",
                  borderBottom: "1px solid #2d2d2d",
                  maxHeight: 300,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 200, height: 300, padding: "30px" }}
                  image={thing.image}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto", paddingTop: 4 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        component="div"
                        variant="h4"
                        sx={{ fontWeight: 1000 }}
                      >
                        $ {thing.price}
                      </Typography>
                      <IconButton onClick={(e) => deleteFromThings(thing.id)}>
                        <ClearIcon></ClearIcon>
                      </IconButton>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ maxHeight: 20 }}
                    >
                      {thing.description}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: 3,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid #2d2d2d",
                        borderBottom: "1px solid #2d2d2d",
                      }}
                    >
                      <TableCell
                        sx={{
                          width: "33%",
                          border: "none",
                          textAlign: "center",
                          fontSize: 12,
                          minHeight: "80px",
                          fontWeight: 900,
                        }}
                      >
                        {thing.title}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          width: "33%",
                          textAlign: "center",
                          fontSize: 18,
                          minHeight: "80px",
                        }}
                      >
                        {thing.size}
                      </TableCell>

                      <TableCell
                        sx={{
                          border: "none",
                          width: "33%",
                          textAlign: "center",
                          fontSize: 15,
                          minHeight: "80px",
                        }}
                      >
                        QTY
                        <select
                          style={{ marginLeft: 5 }}
                          name=""
                          id=""
                          value={thing.count}
                          onChange={(e) => {
                            changeProductCount(+e.target.value, thing.id);
                          }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </TableCell>
                    </Box>

                    <Button
                      onClick={(e) => {
                        addProductToCart(addProductToCartWS(thing));
                        deleteFromThings(thing.id);
                      }}
                      sx={{
                        color: "#2d2d2d",
                        border: "1px solid gainsboro",
                        borderRadius: "20%",
                        marginTop: 5,
                      }}
                    >
                      <IconButton>
                        <TurnedInNotIcon></TurnedInNotIcon>
                      </IconButton>
                      Save for laters
                    </Button>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </div>
        </div>
        <div
          className="MainContainer__Right"
          style={
            Things.products.length != 0
              ? { position: "fixed", left: "870px" }
              : null
          }
        >
          <h1 className="MainContainerRighttitle">TOTAL</h1>
          <div className="Title__group">
            <h3 className="Titlegrouptitle">Sub-total</h3>
            <span className="Titlegroupspan">
              ${Math.round(Things.totalPrice)}
            </span>
          </div>
          <div className="Title__group">
            <h3 className="Titlegrouptitle">Delivery</h3>
            <span className="Titlegroupspan">
              ${Math.round(Things.totalPrice / 6)}
            </span>
          </div>
          <Button
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: "darkgreen",
              marginTop: "20px",
              fontSize: "15px",
            }}
          >
            Buy ${Math.round(Things.totalPrice / 6 + 0.4 + Things.totalPrice)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BagPage;
