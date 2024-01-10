import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";
import { Navbar } from "../components/Navbar/Navbar";

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <Navbar />
      <Box
        sx={{
          paddingY: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      ;
    </Box>
  );
};
