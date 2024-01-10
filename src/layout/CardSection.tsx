import { Box, Paper } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CardSection = ({ children }: Props) => {
  return (
    <Paper
      sx={{
        padding: 2,
      }}
      elevation={4}
    >
      {children}
    </Paper>
    // <Box
    //   sx={{
    //     border: "1px solid black",
    //     borderRadius: "8px",
    //     padding: 2,
    //   }}
    // >
    //   {children}
    // </Box>
  );
};
