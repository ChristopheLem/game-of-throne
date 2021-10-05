import React from "react";
import useGetAxios from "../../hooks/useGetAxios";

import Loading from "../../components/loading/Loading";
import Books from "../../components/books/Books";

const BooksPage = () => {
  const { response: books, loading, error } = useGetAxios("books");

  if (loading) return <Loading />;
  if (error) return <p style={{ color: "red" }}>Une erreur est survenue</p>;

  return <Books books={books} />;
};

export default BooksPage;
