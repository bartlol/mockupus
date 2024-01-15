import React from "react";
import { Variable } from "../../Models/Variable";
import { VariableSlider } from "../VariableSlider/VariableSlider";
import { useDynamicPriceReducer } from "../../hooks/dynamicPriceReducer";
import { VariableToggle } from "../VariableToggle/VariableToggle";
import { Price } from "../Price/Price";
import { ListItemText, MenuItem, TextField, Typography } from "@mui/material";
import { VariableStepper } from "../VariableStepper/VariableStepper";
import { VariableChoice } from "../VariableChoice/VariableChoice";

type Props = {
  variables: Variable[];
};

function variablesToInitialState(variables: Variable[]) {
  const initialState = {};
  variables.forEach(
    (variable) => (initialState[variable.name] = variable.initialValue)
  );
  return initialState;
}

const formula = (context: any) => {
  return (
    context["length"] * context["width"] +
    context["material"] +
    (context["assembled"] ? 666 : 0)
  );
};

export const DynamicVariables = ({ variables }: Props) => {
  const [state, dispatch] = useDynamicPriceReducer(
    variablesToInitialState(variables)
  );

  return (
    <>
      {variables.map((variable) => {
        const value = state[variable.name];
        const onChangeHandler = (value: number) =>
          dispatch({
            type: "SET_VARIABLE",
            payload: { name: variable.name, value },
          });
        switch (variable.type) {
          case "real":
            return (
              <VariableSlider
                label={variable.label}
                step={variable.step}
                value={value}
                min={variable.min}
                max={variable.max}
                onChange={onChangeHandler}
                key={variable.name}
                unit={variable.unit!}
              />
            );
          case "boolean":
            return (
              <VariableToggle
                value={value}
                onChange={onChangeHandler}
                label={variable.label}
                key={variable.name}
              />
            );
          case "int":
            return (
              <VariableStepper
                label={variable.label}
                value={value}
                onChange={onChangeHandler}
                key={variable.name}
              />
            );
          case "choice":
            return (
              <VariableChoice
                onChange={onChangeHandler}
                value={value}
                variable={variable}
              />
            );
        }
      })}
      <Price
        price={formula(state) * state["quantity"]}
        quantity={state["quantity"]}
      />
    </>
  );
};
