import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Bonus.css";

const MyComponent = () => {
  return (
    <Box
      sx={{
        height: "5rem",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 10rem",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          fontSize: "1.4rem",
          marginRight: "1rem",
          borderColor: "#fff",
          fontWeight: "900",

          "&:hover": {
            borderColor: "#fff",
            color: "#fff",
            opacity: "0.7",
            transition: "all .2s ease-in-out",
          },
        }}
      >
        WOMEN
      </Button>
      <Grid sx={{ textAlign: "center" }}>
        <Typography
          className="type"
          variant="h5"
          sx={{ fontWeight: "900" }}
          gutterBottom
        >
          NEW HERE ? Get 15% off everything!*
        </Typography>
        <Typography
          className="type"
          variant="h5"
          sx={{ fontWeight: "900" }}
          gutterBottom
        >
          With code: HELLOASOS
        </Typography>
      </Grid>
      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          fontSize: "1.4rem",
          marginRight: "1rem",
          borderColor: "#fff",
          fontWeight: "900",

          "&:hover": {
            borderColor: "#fff",
            color: "#fff",
            opacity: "0.7",
            transition: "all .2s ease-in-out",
          },
        }}
      >
        MEN
      </Button>
    </Box>
  );
};

export default MyComponent;
