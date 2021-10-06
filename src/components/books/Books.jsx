import React from "react";

import Grid from "@mui/material/Grid";
import BookCardContainer from "./book-card/BookCardContainer";

const Books = ({ books }) => {
  return (
    <Grid container justifyContent="space-between" sx={{ padding: "24px" }}>
      {books?.length > 0 &&
        books.map((book, i) => <BookCardContainer key={i} book={book} />)}
    </Grid>
  );
};

export default Books;
