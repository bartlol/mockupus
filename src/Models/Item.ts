import { ReactNode } from "react";
import { Formula } from "./Formula";
import { Opinion } from "./Opinion";
import { Variable } from "./Variable";

export type Item = {
  name: string;
  productId: string;
  description: () => JSX.Element;
  photoUrls: string[];
  rating: number;
  opinions: Opinion[];
  variables: Variable[];
  breadCrumbs: string[];
  formula: Formula;
};
