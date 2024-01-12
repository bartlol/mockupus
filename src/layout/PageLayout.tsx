import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  appBar: ReactNode;
  children: ReactNode;
};

export const PageLayout = ({ appBar, children }: Props) => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      {appBar}
      <Box
        sx={{
          paddingY: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginX: "auto",
        }}
      >
        {children}
      </Box>
      ;
    </Box>
  );
};
