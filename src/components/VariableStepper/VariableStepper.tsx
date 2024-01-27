import { TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";

type Props = {
  value: boolean;
  onChange: (value: number) => void;
  label: string;
};

export const VariableStepper = ({ label, onChange, value }: Props) => {
  const onQuantityChanged: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const newVal = Number(event.target.value);
    const val = Math.max(newVal, 1);
    onChange(val);
  };
  return (
    <TextField
      label={label}
      type="number"
      value={value}
      onChange={onQuantityChanged}
      color="config"
    />
  );
};
