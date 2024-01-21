import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  appBar: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

export const PageLayout = ({ appBar, children, footer }: Props) => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      {appBar}
      <Box
        sx={{
          paddingTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        {children}
      </Box>
      {footer}
    </Box>
  );
};
