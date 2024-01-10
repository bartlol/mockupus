import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
};

export const VariableToggle = ({ value, onChange, label }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Switch color="primary" checked={value} onChange={handleChange} />
      }
      label={label}
      labelPlacement="end"
    />
  );
};
