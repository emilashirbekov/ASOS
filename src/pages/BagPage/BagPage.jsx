import React, { useEffect, useState } from "react";
import "./BagPage.css";
import Bonus from "../../components/Bonus/Bonus";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
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

  const theme = useTheme();

  return (
    <>
      <Bonus />
      <div className="page">
        <div className="MainContainer">
          <div className="MainContainer__Left">
            <div className="MainContainerLefttitle">
              <h1 className="title__Bag">MY BAG</h1>
              <span className="Tittle__span">
                Items are reserved for 60 minutes
              </span>
            </div>
            <hr />
            {Things.products.length === 0 ? (
              <div style={{ textAlign: "center" }}>
                <ProductionQuantityLimitsIcon
                  sx={{ fontSize: "6rem", fontWeight: "bold" }}
                />
                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bolder",
                    marginTop: "2rem",
                  }}
                >
                  There's not items in your favourites
                </h2>
              </div>
            ) : (
              <div className="Products__Bag">
                {Things.products.map((thing) => (
                  <Card
                    key={thing.id}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      borderBottom: "1px solid #2d2d2d",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: "100%", sm: 200 },
                        height: 300,
                        padding: "30px",
                        order: { xs: 2, sm: 1 },
                      }}
                      image={thing.image}
                      alt="Live from space album cover"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        order: { xs: 1, sm: 2 },
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto", paddingTop: 4 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            component="div"
                            variant="h4"
                            sx={{ fontWeight: 1000 }}
                          >
                            $ {thing.price}
                          </Typography>
                          <IconButton
                            onClick={(e) => deleteFromThings(thing.id)}
                          >
                            <ClearIcon />
                          </IconButton>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                          sx={{
                            maxHeight: 20,
                            fontSize: "1.6rem",
                            marginBottom: "5rem",
                          }}
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
                              width: "100%",
                              maxWidth: { xs: "100%", sm: "33%" },
                              border: "none",
                              textAlign: { xs: "center", sm: "left" },
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
                              width: { xs: "100%", sm: "33%" },
                              textAlign: { xs: "center", sm: "center" },
                              fontSize: 18,
                              minHeight: "80px",
                            }}
                          >
                            {thing.size}
                          </TableCell>
                          <TableCell
                            sx={{
                              border: "none",
                              width: { xs: "100%", sm: "33%" },
                              textAlign: { xs: "center", sm: "right" },
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
                              {[...Array(10)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                  {index + 1}
                                </option>
                              ))}
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
                            marginTop: "5rem",
                          }}
                        >
                          <IconButton>
                            <TurnedInNotIcon sx={{ fontSize: "2rem" }} />
                          </IconButton>
                          <span style={{ fontSize: "1.2rem" }}>
                            Save for later
                          </span>
                        </Button>
                      </CardContent>
                    </Box>
                  </Card>
                ))}
              </div>
            )}
          </div>
          <div className="MainContainer__Right">
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
    </>
  );
};

export default BagPage;
