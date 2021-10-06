import React from "react";
import getAliases from "../../../utils/get-aliases";

import { TableCell } from "@mui/material";

const CharacterRow = ({ children, data }) => {
  return (
    <>
      <TableCell style={{ padding: "8px" }}>{data.name}</TableCell>
      <TableCell style={{ padding: "8px" }}>{data.gender}</TableCell>
      <TableCell style={{ padding: "8px" }}>
        {data.aliases && getAliases(data.aliases)}
      </TableCell>
      <TableCell style={{ padding: "8px" }}>{data.playedBy}</TableCell>
      {children}
    </>
  );
};

export default CharacterRow;
