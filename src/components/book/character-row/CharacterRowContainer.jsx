import React from "react";
import useGetAxios from "../../../hooks/useGetAxios";

import CharacterRow from "./CharacterRow";

const CharacterRowContainer = ({ id }) => {
  const { response } = useGetAxios(`/characters/${id}`);

  return <> {response && <CharacterRow data={response} />} </>;
};

export default CharacterRowContainer;
