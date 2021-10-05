import React from "react";
import getAliases from "../../../utils/get-aliases";

import { TableCell, TableRow } from "@mui/material";

const CharacterRow = ({ children, response }) => {
  return (
    <>
      {response ? (
        <TableRow>
          <TableCell style={{ padding: "8px" }}>{response.name}</TableCell>
          <TableCell style={{ padding: "8px" }}>{response.gender}</TableCell>
          <TableCell style={{ padding: "8px" }}>
            {response.aliases && getAliases(response.aliases)}
          </TableCell>
          <TableCell style={{ padding: "8px" }}>{response.playedBy}</TableCell>
          {children}
        </TableRow>
      ) : null}
    </>
  );
};

export default CharacterRow;
