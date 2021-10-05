import React from "react";
import {
  TableContainer,
  Paper,
  TablePagination,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CharacterRow from "../character-row/CharacterRow";

const CharactersTable = ({
  ids,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TableContainer component={Paper} style={{ width: "80%" }}>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={ids?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="lignes par page"
      />
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ fontWeight: "bold", fontSize: 16, padding: "8px" }}
            >
              Nom
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", fontSize: 16, padding: "8px" }}
            >
              Genre
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", fontSize: 16, padding: "8px" }}
            >
              Alias
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", fontSize: 16, padding: "8px" }}
            >
              Joué par
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ids
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((id) => (
              <CharacterRow key={id} id={id} />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        labelRowsPerPage="lignes par page"
        count={ids?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CharactersTable;
