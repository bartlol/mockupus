import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import React, { ReactNode } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import { RowStack } from "../RowStack/RowStack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {
  logo: ReactNode;
};

export const Navbar = ({ logo }: Props) => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ m: 0.5 }}>{logo}</Box>
        <RowStack gap={4}>
          <SearchBar />
          <RowStack>
            <IconButton
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <MailIcon />
            </IconButton>
            <IconButton
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              <AccountCircle />
            </IconButton>
          </RowStack>
        </RowStack>
      </Toolbar>
    </AppBar>
  );
};
