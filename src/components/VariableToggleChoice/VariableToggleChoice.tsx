import {
  SelectChangeEvent,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { ToggleVariable } from "../../Models/Variable";
import { ColumnStack } from "../ColumnStack/ColumnStack";

type Props = {
  onChange: (value: number) => void;
  value: number;
  variable: ToggleVariable;
};

export const VariableToggleChoice = ({ variable, onChange, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value));
  };

  return (
    // <FormControl fullWidth>
    <ColumnStack gap={0.5}>
      <InputLabel color="config">{variable.label}</InputLabel>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
        color="config"
        sx={{ width: "100%" }}
      >
        {variable.options.map((option) => (
          <ToggleButton value={option.value} key={option.name} sx={{ flex: 1 }}>
            {option.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ColumnStack>
  );
};
