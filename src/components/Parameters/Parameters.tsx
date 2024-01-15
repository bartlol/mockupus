import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import { CardSection } from "../../layout/CardSection";
import { ColumnStack } from "../ColumnStack/ColumnStack";

type Parameter = {
  name: string;
  value: string;
};

const rows: Parameter[] = [
  {
    name: "Materiał",
    value: "Aluminium anodowane",
  },
  { name: "Kolor", value: "Antracyt" },
  //   { name: "Model", value: "Gablota wewnętrzna" },
  { name: "Grubość całkowita", value: "41,4 mm" },
  { name: "Przestrzeń (grubość) użytkowa", value: "27,8 mm" },
  { name: "Materiał przeszklenia", value: "Plexi" },
  //   {
  //     name: "Ściana tylna",
  //     value:
  //       "Powierzchnia magnetyczno - suchościeralna (możliwość zastosowania markerów i magnesów)",
  //   },
  //   {
  //     name: "Rama",
  //     value:
  //       "Wykonana ze specjalnie zaprojektowanych profili aluminiowych gwarantujących wysoką jakość",
  //   },
  { name: "Zamek", value: "Rama wyposażona w zamek patentowy" },
  { name: "Klucze", value: "2 komplety kluczy w zestawie" },
  { name: "Magnesy", value: "Komplet magnesów w zestawie" },
  //   { name: "Jakość wykonania", value: "Bardzo wysoka" },
  //   {
  //     name: "Zastosowanie",
  //     value:
  //       "Prezentacja informacji wewnętrz budynku (restauracje, bary, muzea, urzędy, sklepy)",
  //   },
  { name: "Podpórka ramy", value: "Rama podtrzymywana specjalną podpórką" },
  {
    name: "Montaż",
    value: "Gablota zawieszana na przygotowanych w profilu fasolkach",
  },
  //   { name: "Otwieranie", value: "Dwie możliwości otwierania gabloty" },
  { name: "Pochodzenie", value: "Produkt polski" },
];

export const Parameters = () => {
  return (
    <CardSection>
      <ColumnStack gap={2}>
        <Typography variant="h6" fontWeight={"bold"}>
          Parametry
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(odd)": {
                      backgroundColor: (theme) => theme.palette.action.hover,
                    },
                    "& > *": {
                      padding: 1,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ColumnStack>
    </CardSection>
  );
};
