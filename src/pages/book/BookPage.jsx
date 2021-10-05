import React from "react";
import { useLocation } from "react-router";

import useGetAxios from "../../hooks/useGetAxios";
import getIdFromUrlProps from "../../utils/get-id-from-url-props";

import Loading from "../../components/loading/Loading";
import Book from "../../components/book/Book";

const BookPage = () => {
  const { pathname } = useLocation();
  const id = getIdFromUrlProps(pathname);
  const { response: book, loading, error } = useGetAxios(`/books/${id}`);

  if (loading) return <Loading />;
  if (error) return <p style={{ color: "red" }}>Une erreur est survenue</p>;

  return <Book book={book} title={book?.name}></Book>;
};

export default BookPage;
