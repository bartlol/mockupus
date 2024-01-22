import React from "react";
import { Box } from "@mui/material";
import { RowStack } from "../RowStack/RowStack";

type Props = {
  logoUrl: string;
  withBackground: boolean;
};

export const Logo = ({ logoUrl, withBackground = false }: Props) => {
  const logo = (
    <Box
      component={"img"}
      src={logoUrl}
      sx={{
        height: withBackground ? "32px" : "64px",
        mixBlendMode: "multiply",
        objectFit: "contain",
      }}
      alt="Logo sklepu"
    />
  );
  if (withBackground) {
    return (
      <RowStack
        sx={{
          py: 1,
          px: 2,
          m: 1,
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: 4,
        }}
      >
        {logo}
      </RowStack>
    );
  } else {
    return logo;
  }
};
