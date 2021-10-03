import React, { useState, useEffect } from "react";
import useGetAxios from "../../hooks/useGetAxios";

import Loading from "../../components/loading/Loading";
import BooksComponent from "../../components/books/Books";

const BooksPage = () => {
  const { response, loading, error } = useGetAxios("books");
  const [books, setBooks] = useState(response);

  useEffect(() => {
    setBooks(response);
  }, [response]);
  console.log(response);
  if (loading) return <Loading />;
  if (error) return <p style={{ color: "red" }}>Une erreur est survenue</p>;

  return <BooksComponent books={books} />;
};

export default BooksPage;
