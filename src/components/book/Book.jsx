import React from "react";

import { Grid, Typography, Button } from "@mui/material";
import CharactersTableContainer from "./character-table/CharactersTableContainer";
import { Link } from "react-router-dom";

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
      <Grid container justifyContent="center">
        <CharactersTableContainer book={book} />
      </Grid>

      <Button style={{ margin: "32px 0 32px 200px" }}>
        <Link to="/">Retour</Link>
      </Button>
    </>
  );
};

export default Book;
