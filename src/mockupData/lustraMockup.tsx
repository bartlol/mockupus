import { Item } from "../Models/Item";
import { Mockup } from "../Models/Mockup";
import { GENERIC_OPINIONS } from "./genericOpinions";
import { LustraDescription } from "../components/Descriptions/LustraDescription";

const item: Item = {
  name: "Lustro srebrne w ramie aluminiowej",
  productId: "84672ffc",
  description: LustraDescription,
  photoUrls: {
    1.0: ["Lustro.jpg", "lustro-srebrne-0.jpg", "lustro-srebrne-1.jpg"],
    1.1: ["lustro-zlote-0.jpg", "lustro-zlote-1.jpg"],
  },
  rating: 4.81,
  opinions: GENERIC_OPINIONS,
  variables: [
    {
      type: "real",
      min: 30,
      max: 200,
      name: "width",
      initialValue: 100,
      label: "Szerokość",
      unit: "cm",
      step: 1,
    },
    {
      type: "real",
      min: 50,
      max: 400,
      name: "height",
      initialValue: 100,
      label: "Wysokość",
      unit: "cm",
      step: 1,
    },
    {
      type: "colorChoice",
      options: [
        {
          name: "srebrne",
          value: 1.0,
          color: "#ccc8c0",
        },
        {
          name: "zlote",
          value: 1.1,
          color: "#deb672",
        },
      ],
      initialValue: 1,
      label: "Kolor ramy",
      name: "color",
    },
    {
      type: "toggle",
      options: [
        {
          name: "Nie",
          value: 0,
        },
        {
          name: "Klej",
          value: 30,
        },
        {
          name: "Zawieszki",
          value: 50,
        },
      ],
      initialValue: 0,
      label: "Akcesoria montażowe",
      name: "accessories",
    },
    {
      type: "int",
      initialValue: 1,
      label: "Ilość sztuk",
      name: "quantity",
    },
  ],
  breadCrumbs: [
    "Strona główna",
    "Lustra",
    "Lustra w lusterzanej ramie",
    "Lustra na wymiar",
  ],
  formula: (context) =>
    150 +
    context["width"] * context["height"] * 0.02 * context["color"] +
    context["accessories"],
  parameters: [
    { name: "Pozycjonowanie", value: "Podłóżne, proste" },
    { name: "Szerokość ramy", value: "9 cm" },
    { name: "Ozdoba ramy", value: "Boki ramy ozdobione lustrami" },
    { name: "Głębokość ramy", value: "2,8 cm" },
    {
      name: "Zastosowanie",
      value: "Pomieszczenia małe, klasyczne, nowojorskie, nowoczesne",
    },
    {
      name: "Zastosowanie w łazienkach",
      value: "Nadaje się do wentylowanych łazienek",
    },
    { name: "Mocowania", value: "Do zawieszania w pionie i poziomie" },
  ],
};

export const LUSTRA_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl:
    "https://led-lustra.pl/wp-content/uploads/2023/02/GD_logo_new_wh-865x1024.webp",
  logoOnBackground: false,
  primaryColor: "#1e1b16",
  secondaryColor: "#bc8b4a",
  configColor: "#bc8b4a",
  companyName: "Glass Design",
};
