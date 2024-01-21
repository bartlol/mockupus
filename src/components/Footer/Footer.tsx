import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";
import { RowStack } from "../RowStack/RowStack";
import { ColumnStack } from "../ColumnStack/ColumnStack";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import _ from "lodash";

type Props = {
  logo: ReactNode;
  companyName: string;
};

export const Footer = ({ logo, companyName }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        py: 4,
      }}
    >
      <Container>
        <ColumnStack gap={2}>
          <RowStack justifyContent={"center"} gap={4}>
            <ColumnStack alignItems={"center"} gap={0}>
              <Link href={"#"} color={"inherit"} variant="h4">
                555-666-777
              </Link>
              <Typography
                variant="caption"
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                }}
              >
                pon-pt 8-20 sob-nd 10-18
              </Typography>
            </ColumnStack>
            <Typography>{`biuro@${companyName.toLowerCase()}.pl`}</Typography>
            <Link href={"#"} color={"inherit"}>
              Dane kontaktowe
            </Link>
          </RowStack>
          <Divider flexItem />
          <RowStack justifyContent={"space-evenly"} alignItems={"start"}>
            <Typography fontWeight={"bold"} variant="h6">
              Ważne linki
            </Typography>
            <RowStack
              justifyContent={"space-between"}
              gap={8}
              alignItems={"start"}
            >
              <ColumnStack>
                <Typography variant="caption">Strona główna</Typography>
                <Typography variant="caption">Odstąpienia od umowy</Typography>
                <Typography variant="caption">Affiliate Program</Typography>
                <Typography variant="caption">Najczęstsze pytania</Typography>
              </ColumnStack>
              <ColumnStack>
                <Typography variant="caption">Jak kupować?</Typography>
                <Typography variant="caption">Reklamacje</Typography>
                <Typography variant="caption">Recenzje produktow</Typography>
                <Typography variant="caption">Sposób dostawy</Typography>
              </ColumnStack>
              <ColumnStack>
                <Typography variant="caption">Regulamin zakupów</Typography>
                <Typography variant="caption">Dla partnerów</Typography>
              </ColumnStack>
            </RowStack>
          </RowStack>
          <Divider flexItem />
        </ColumnStack>
        <ColumnStack sx={{ alignItems: "center" }} gap={0}>
          {logo}
          <RowStack gap={0}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <XIcon />
            </IconButton>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
          </RowStack>
        </ColumnStack>
      </Container>
    </Box>
  );
};
