import React, { useContext } from "react";

import { Button } from "@mui/material";
import BookCard from "./BookCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavorisContext from "../../../store/context/FavorisContext";
import getIdFromUrlProps from "../../../utils/get-id-from-url-props";

const BookCardContainer = ({ book }) => {
  const { url, name, authors, numberOfPages } = book;
  const id = getIdFromUrlProps(url);
  const [{ books }, dispatch] = useContext(FavorisContext);

  const handleAddBookInFavoris = (book) => {
    dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  };
  const handleDeleteBookInFavoris = (book) => {
    dispatch({
      type: "DELETE_BOOK",
      payload: book,
    });
  };

  const elementAlreadyExist = (books, book) =>
    !!books.find((bookElt) => bookElt === book);

  const isExisting = elementAlreadyExist(books, book);

  const handleClickFavoris = () => {
    !isExisting
      ? handleAddBookInFavoris(book)
      : handleDeleteBookInFavoris(book);
  };

  return (
    <>
      <BookCard
        id={id}
        name={name}
        authors={authors}
        numberOfPages={numberOfPages}
      >
        <Button
          startIcon={isExisting ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          size="small"
          sx={{ textTransform: "none" }}
          onClick={handleClickFavoris}
        >
          {isExisting ? "Supprimer des Favoris" : "Ajouter aux Favoris"}
        </Button>
      </BookCard>
    </>
  );
};

export default BookCardContainer;
