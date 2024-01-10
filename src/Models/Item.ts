import { Opinion } from "./Opinion";
import { Variable } from "./Variable";

export type Item = {
  name: string;
  companyLogoUrl: string;
  companyName: string;
  productId: string;
  description: string;
  photoUrls: string[];
  rating: number;
  isFavourite: boolean;
  opinions: Opinion[];
  variables: Variable[];
};
