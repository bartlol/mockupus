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
              <Link
                href={"#"}
                sx={{
                  color: (theme) => theme.palette.secondary.main,
                }}
                variant="h4"
              >
                555-666-777
              </Link>
              <Typography
                variant="caption"
                sx={{
                  color: (theme) => theme.palette.primary.contrastText,
                }}
              >
                pon-pt 8-20 sob-nd 10-18
              </Typography>
            </ColumnStack>
            <Link
              href={"#"}
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >{`biuro@${companyName.toLowerCase().replace(" ", "")}.pl`}</Link>
            <Link
              href={"#"}
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Dane kontaktowe
            </Link>
          </RowStack>
          <Divider flexItem />
          <RowStack justifyContent={"space-evenly"} alignItems={"start"}>
            <Typography
              fontWeight={"bold"}
              variant="subtitle1"
              sx={{
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Ważne linki
            </Typography>
            <RowStack
              justifyContent={"space-between"}
              gap={8}
              alignItems={"start"}
            >
              {[
                [
                  "Strona główna",
                  "Odstąpienia od umowy",
                  "Affiliate Program",
                  "Najczęstsze pytania",
                ],
                [
                  "Jak kupować?",
                  "Reklamacje",
                  "Recenzje produktów",
                  "Sposób dostawy",
                ],
                ["Regulamin zakupów", "Dla partnerów"],
              ].map((group) => (
                <ColumnStack>
                  {group.map((text) => (
                    <Link
                      href={"#"}
                      variant="caption"
                      sx={{
                        color: (theme) => theme.palette.primary.contrastText,
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </ColumnStack>
              ))}
            </RowStack>
          </RowStack>
          <Divider flexItem />
        </ColumnStack>
        <ColumnStack sx={{ alignItems: "center", mt: 1 }} gap={1}>
          {logo}
          <RowStack gap={0}>
            <IconButton
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              <YouTubeIcon />
            </IconButton>
          </RowStack>
        </ColumnStack>
      </Container>
    </Box>
  );
};
