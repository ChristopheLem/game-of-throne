import React from "react";
import getIdFromUrlProps from "../../../utils/get-id-from-url-props";

import CharactersTable from "./CharactersTable";

const CharactersTableContainer = ({ book }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const characters = book?.characters;
  const ids =
    characters && characters.map((character) => getIdFromUrlProps(character));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <CharactersTable
      ids={ids}
      rowsPerPage={rowsPerPage}
      page={page}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default CharactersTableContainer;
