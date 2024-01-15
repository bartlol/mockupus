import * as React from "react";
import { Box, Typography, Slider, Input } from "@mui/material";
import { RowStack } from "../RowStack/RowStack";

type Props = {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
};

export const VariableSlider = ({
  value,
  onChange,
  label,
  max,
  min,
  step,
  unit,
}: Props) => {
  const handleSliderChange = (_: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      throw new Error(`Array is not supported -> ${value}`);
    }
    onChange(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "" ? 0 : Number(event.target.value));
  };

  //   const handleBlur = () => {
  //     if (value < 0) {
  //       setValue(0);
  //     } else if (value > 100) {
  //       setValue(100);
  //     }
  //   };
  const marks = [
    {
      value: min,
      label: min.toString(),
    },
    {
      value: max,
      label: max.toString(),
    },
  ];

  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        {`${label} [${unit}]`}
      </Typography>
      <RowStack gap={4} sx={{ ml: 1 }}>
        <Slider
          sx={{
            flex: 4,
          }}
          value={value}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          step={step}
          min={min}
          max={max}
          marks={marks}
          size={"medium"}
        />
        <Input
          sx={{
            flex: 1,
          }}
          value={value}
          size="small"
          onChange={handleInputChange}
          //   onBlur={handleBlur}
          inputProps={{
            step,
            min,
            max,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </RowStack>
    </Box>
  );
};
