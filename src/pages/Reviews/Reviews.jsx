import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useProduct } from "../../contexts/ProductContextProvider";

const App = () => {
  const { addReview } = useProduct();

  const [formValue, setFormValue] = useState({
    name: "",
    review: "",
  });

  function handleChange(e) {
    let obj = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(obj);
  }

  return (
    <>
      <Grid container spacing={3} display={"flex"} justifyContent={"center"}>
        <Grid item xs={12} md={4}>
          <Card style={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Left Card
              </Typography>
              <Typography color="textSecondary">
                Some content for the card
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} style={{ marginLeft: "16px" }}>
          <Typography variant="h5" component="h2">
            Reviews
          </Typography>
          <TextField
            id="comment"
            label="Add a review"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
