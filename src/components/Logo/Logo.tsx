import React from "react";
import { Box } from "@mui/material";

type Props = {
  logoUrl: string;
};

export const Logo = ({ logoUrl }: Props) => {
  return (
    <Box
      component={"img"}
      src={logoUrl}
      sx={{
        height: "64px",
        mixBlendMode: "multiply",
        // width: "auto",
        objectFit: "contain",
      }}
      alt="Logo sklepu"
    />
  );
};
