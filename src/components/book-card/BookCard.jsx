import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const BookCard = ({ url, name, authors, numberOfPages }) => {
  const urlArray = url.split("/");
  const id = urlArray[urlArray.length - 1];
  return (
    <Card sx={{ minWidth: 275, margin: 4 }} elevation={3}>
      <CardContent>
        <Typography
          variant="h1"
          sx={{ fontSize: 32, fontWeight: "bold" }}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{authors}</Typography>
        <Typography variant="body2">{numberOfPages} pages</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ textTransform: "none" }}>
          <Link to={`/books/${id}`}>Plus de details</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
