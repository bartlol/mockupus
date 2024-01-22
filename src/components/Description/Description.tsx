import { Typography } from "@mui/material";
import React from "react";
import { CardSection } from "../../layout/CardSection";
import { ColumnStack } from "../ColumnStack/ColumnStack";

type Props = {
  description: string;
};

export const Description = ({ description }: Props) => {
  return (
    <CardSection>
      <ColumnStack gap={2}>
        <Typography variant="h6" fontWeight={"bold"}>
          Opis
        </Typography>
        <Typography whiteSpace={"break-spaces"}>{description}</Typography>
      </ColumnStack>
    </CardSection>
  );
};
