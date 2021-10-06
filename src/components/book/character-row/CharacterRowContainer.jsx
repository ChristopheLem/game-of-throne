import React from "react";
import useGetAxios from "../../../hooks/useGetAxios";

import { TableRow } from "@mui/material";
import CharacterRow from "./CharacterRow";

const CharacterRowContainer = ({ id }) => {
  const { response } = useGetAxios(`/characters/${id}`);

  return <TableRow>{response && <CharacterRow data={response} />}</TableRow>;
};

export default CharacterRowContainer;
