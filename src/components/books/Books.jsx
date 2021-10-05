import React from "react";

import Grid from "@mui/material/Grid";
import BookCard from "./book-card/BookCard";

const Books = ({ books }) => {
  return (
    <Grid container justifyContent="space-around" sx={{ padding: "24px" }}>
      {books?.length > 0 &&
        books.map((book, i) => (
          <BookCard
            key={i}
            url={book.url}
            name={book.name}
            authors={book.authors}
            numberOfPages={book.numberOfPages}
          />
        ))}
    </Grid>
  );
};

export default Books;
