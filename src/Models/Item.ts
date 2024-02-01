import { ReactNode } from "react";
import { Formula } from "./Formula";
import { Opinion } from "./Opinion";
import { Variable } from "./Variable";
import { Parameter } from "../components/Parameters/Parameters";

export type Item = {
  name: string;
  productId: string;
  description: () => JSX.Element;
  photoUrls: Record<number, string[]>;
  rating: number;
  opinions: Opinion[];
  variables: Variable[];
  breadCrumbs: string[];
  formula: Formula;
  parameters: Parameter[];
};
