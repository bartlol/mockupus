import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { ChoiceVariable } from "../../Models/Variable";

type Props = {
  onChange: (value: number) => void;
  value: number;
  variable: ChoiceVariable;
};

export const VariableChoice = ({ variable, onChange, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{variable.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value.toString()}
        label={variable.label}
        onChange={handleChange}
      >
        {variable.options.map((option) => (
          <MenuItem
            key={option.name}
            value={option.value}
            sx={{ display: "flex" }}
          >
            <ListItemText>{option.name}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
