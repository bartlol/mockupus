import React, { ChangeEventHandler, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { RowStack } from "./RowStack/RowStack";
import { VariableSlider } from "./VariableSlider/VariableSlider";
import { ColumnStack } from "./ColumnStack/ColumnStack";

export const DynamicPrice = () => {
  const [length, setLength] = useState<number>(10);
  const [width, setWidth] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);

  const onQuantityChanged: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const newVal = Number(event.target.value);
    const val = Math.max(newVal, 1);
    setQuantity(val);
  };

  return (
    <ColumnStack>
      <VariableSlider
        label="Długość"
        onChange={setLength}
        value={length}
        min={10}
        max={100}
        step={5}
      />
      <VariableSlider
        label="Szerokość"
        onChange={setWidth}
        value={width}
        min={10}
        max={200}
        step={10}
      />
      <TextField
        label="Ilość sztuk"
        type="number"
        value={quantity}
        onChange={onQuantityChanged}
      />
      <RowStack alignItems={"baseline"}>
        <Typography variant="h5">{length * width * quantity} PLN</Typography>
        <Typography variant="caption">brutto / {quantity} szt.</Typography>
      </RowStack>
    </ColumnStack>
  );
};
