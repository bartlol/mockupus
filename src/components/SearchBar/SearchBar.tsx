import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  alpha,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.05),
        borderRadius: 2,
        paddingX: 2,
        borderColor: (theme) => alpha(theme.palette.common.black, 0.1),
        borderStyle: "solid",
        borderWidth: "1px",
        ":hover": {
          backgroundColor: (theme) => alpha(theme.palette.common.black, 0.1),
        },
      }}
    >
      <InputBase placeholder="Szukaj..."></InputBase>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
