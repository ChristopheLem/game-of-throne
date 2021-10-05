import React from "react";

import { Grid, Typography } from "@mui/material";
import CharactersTableContainer from "./character-table/CharactersTableContainer";

const Book = ({ book, title }) => {
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        style={{ fontSize: "32px", padding: "32px" }}
      >
        {title}
      </Typography>
      <Grid container justifyContent="center" style={{ margin: "32px" }}>
        <CharactersTableContainer book={book} />
      </Grid>
    </>
  );
};

export default Book;
