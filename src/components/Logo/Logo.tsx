import { Box } from "@mui/material";
import React from "react";

export const Logo = () => {
  return (
    <Box
      component={"img"}
      src="https://topal.com.pl/data/gfx/mask/pol/logo_1_big.png"
      sx={{
        height: "64px",
        mixBlendMode: "multiply",
      }}
      alt="Logo sklepu"
    />
  );
};
