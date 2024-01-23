import { Formula } from "./Formula";
import { Opinion } from "./Opinion";
import { Variable } from "./Variable";

export type Item = {
  name: string;
  productId: string;
  description: string;
  photoUrls: string[];
  rating: number;
  opinions: Opinion[];
  variables: Variable[];
  breadCrumbs: string[];
  formula: Formula;
};
