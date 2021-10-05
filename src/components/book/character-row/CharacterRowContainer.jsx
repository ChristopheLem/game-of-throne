import React from "react";
import useGetAxios from "../../../hooks/useGetAxios";

import CharacterRow from "./CharacterRow";

const CharacterRowContainer = ({ id }) => {
  const { response } = useGetAxios(`/characters/${id}`);

  return <CharacterRow response={response} />;
};

export default CharacterRowContainer;
