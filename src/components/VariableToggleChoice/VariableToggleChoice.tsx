import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from "@mui/material";
import React from "react";
import { ChoiceVariable } from "../../Models/Variable";
import { ColumnStack } from "../ColumnStack/ColumnStack";

type Props = {
  onChange: (value: number) => void;
  value: number;
  variable: ChoiceVariable;
};

export const VariableToggleChoice = ({ variable, onChange, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value));
  };

  return (
    // <FormControl fullWidth>
    <ColumnStack gap={0.5}>
      <InputLabel color="config" id="demo-simple-select-label">
        {variable.label}
      </InputLabel>
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
