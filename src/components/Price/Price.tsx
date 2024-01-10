import React from "react";
import { Typography } from "@mui/material";
import { RowStack } from "../RowStack/RowStack";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";

type Props = {
  price: number;
  quantity: number;
};

export const Price = ({ price, quantity }: Props) => {
  return (
    <RowStack alignItems={"baseline"}>
      <Typography variant="h5">
        <AnimatedNumber num={price} /> PLN
      </Typography>
      <Typography variant="caption">brutto / {quantity} szt.</Typography>
    </RowStack>
  );
};
