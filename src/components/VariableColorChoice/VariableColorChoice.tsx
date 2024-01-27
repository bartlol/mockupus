import {
  SelectChangeEvent,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Tooltip,
} from "@mui/material";
import React from "react";
import { ColorChoiceVariable } from "../../Models/Variable";
import { ColumnStack } from "../ColumnStack/ColumnStack";

type Props = {
  onChange: (value: number) => void;
  value: number;
  variable: ColorChoiceVariable;
};

export const VariableColorChoice = ({ variable, onChange, value }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target);
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
        color="config"
      >
        {variable.options.map((option) => (
          <ToggleButton value={option.value} key={option.name}>
            <Box
              sx={{
                backgroundColor: option.color,
                width: "32px",
                height: "32px",
                borderRadius: "100%",
                boxShadow: "0px 0px 8px -4px #000000",
                pointerEvents: "none",
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ColumnStack>
  );
};
