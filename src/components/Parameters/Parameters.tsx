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

export type Parameter = {
  name: string;
  value: string;
};

const rows: Parameter[] = [
  {
    name: "Materiał",
    value: "Aluminium anodowane",
  },
  { name: "Kolor", value: "Antracyt" },
  { name: "Grubość całkowita", value: "41,4 mm" },
  { name: "Przestrzeń (grubość) użytkowa", value: "27,8 mm" },
  { name: "Materiał przeszklenia", value: "Plexi" },
  { name: "Zamek", value: "Rama wyposażona w zamek patentowy" },
  { name: "Klucze", value: "2 komplety kluczy w zestawie" },
  { name: "Magnesy", value: "Komplet magnesów w zestawie" },
  { name: "Podpórka ramy", value: "Rama podtrzymywana specjalną podpórką" },
  {
    name: "Montaż",
    value: "Gablota zawieszana na przygotowanych w profilu fasolkach",
  },
  { name: "Pochodzenie", value: "Produkt polski" },
];

type Props = {
  parameters: Parameter[];
};

export const Parameters = ({ parameters }: Props) => {
  return (
    <CardSection>
      <ColumnStack gap={2}>
        <Typography variant="h6" fontWeight={"bold"}>
          Parametry
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {parameters.map((row) => (
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
