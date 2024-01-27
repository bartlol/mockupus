export type Variable =
  | RealVariable
  | BooleanVariable
  | IntegerVariable
  | ChoiceVariable
  | ToggleVariable
  | ColorChoiceVariable;

type BooleanVariable = {
  type: "boolean";
  name: string;
  label: string;
  initialValue: boolean;
};

type RealVariable = {
  type: "real";
  min: number;
  max: number;
  name: string;
  label: string;
  step: number;
  initialValue: number;
  unit?: string;
};

type IntegerVariable = {
  type: "int";
  min: number;
  max: number;
  name: string;
  label: string;
  step: number;
  initialValue: number;
  unit?: string;
};

export type ChoiceVariable = {
  type: "choice";
  options: ChoiceVariableOption[];
  name: string;
  label: string;
  initialValue: number;
  unit?: string;
};

export type ToggleVariable = {
  type: "toggle";
  options: ChoiceVariableOption[];
  name: string;
  label: string;
  initialValue: number;
  unit?: string;
};

export type ColorChoiceVariable = {
  type: "colorChoice";
  options: ChoiceColorVariable[];
  name: string;
  label: string;
  initialValue: number;
};

type ChoiceVariableOption = {
  name: string;
  value: number;
};

type ChoiceColorVariable = ChoiceVariableOption & {
  color: string;
};
