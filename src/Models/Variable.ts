export type Variable = RealVariable | BooleanVariable | IntegerVariable;

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
