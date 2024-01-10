import React from "react";
import { Box, BoxProps } from "@mui/material";

// typing taken from https://mui.com/material-ui/guides/composition example
export const RowStack = <C extends React.ElementType>(
  props: BoxProps<C, { component?: C }>
) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      alignItems={"center"}
      {...props}
    />
  );
};
