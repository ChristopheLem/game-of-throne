import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = ({ ...props }) => {
  return (
    <CircularProgress
      size={40}
      sx={{ position: "absolute", top: "50%", left: "50%" }}
      {...props}
    />
  );
};

export default Loading;
