import { Divider, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { CardSection } from "../../layout/CardSection";
import { ColumnStack } from "../ColumnStack/ColumnStack";

type Props = {
  description: () => JSX.Element;
};

export const Description = ({ description }: Props) => {
  return (
    <CardSection>
      <ColumnStack gap={2}>
        <Typography variant="h5" fontWeight={"bold"}>
          Opis
        </Typography>
        <Divider />
        {description()}
      </ColumnStack>
    </CardSection>
  );
};
