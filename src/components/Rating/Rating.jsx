import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { useProduct } from "../../contexts/ProductContextProvider";

export default function HoverRating({ rating, id }) {
  const { updateRating } = useProduct();
  const [hover, setHover] = React.useState(-1);
  const [currentRating, setCurrentRating] = React.useState(rating);

  const handleRating = (newValue) => {
    setCurrentRating(newValue);
    updateRating(id, +newValue);
  };

  const labels = {
    0.5: "0",
    1: "1",
    1.5: "1.5",
    2: "2",
    2.5: "2.5",
    3: "3",
    3.5: "3.5",
    4: "4",
    4.5: "4.5",
    5: "5",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Rating
        className="rating"
        name={`hover-feedback-${id}`}
        value={+currentRating}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          event.preventDefault();
          handleRating(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: "2.2rem" }} />}
        sx={{
          "& .MuiRating-iconFilled": {
            fontSize: "2.2rem",
          },
        }}
      />
      {rating !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : currentRating]}</Box>
      )}
    </Box>
  );
}
