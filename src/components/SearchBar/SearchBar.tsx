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
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.primary.contrastText, 0.12),
        borderRadius: 2,
        paddingX: 2,
        borderColor: alpha(theme.palette.primary.contrastText, 0.2),
        borderStyle: "solid",
        borderWidth: "1px",
        ":hover": {
          backgroundColor: alpha(theme.palette.primary.contrastText, 0.15),
        },
      })}
    >
      <InputBase
        placeholder="Szukaj..."
        sx={{
          color: (theme) => theme.palette.primary.contrastText,
        }}
      ></InputBase>
      <IconButton
        sx={{
          color: (theme) => alpha(theme.palette.primary.contrastText, 0.7),
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
