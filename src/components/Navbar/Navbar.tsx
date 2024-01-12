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
        {logo}
        <RowStack gap={4}>
          <SearchBar />
          <RowStack>
            <IconButton>
              <MailIcon />
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </RowStack>
        </RowStack>
      </Toolbar>
    </AppBar>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "row",
    //     gap: 1,
    //   }}
    // >
    //   <Logo />
    //   <p>Zaloguj sie</p>
    //   <p>Elo</p>
    // </Box>
  );
};
