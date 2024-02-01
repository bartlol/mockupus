import { Item } from "../Models/Item";
import { Mockup } from "../Models/Mockup";
import { GENERIC_OPINIONS } from "./genericOpinions";
import { Kartony24Description } from "../components/Descriptions/Kartony24Description";

const item: Item = {
  name: "Karton automatyczny z paskiem klejowym",
  productId: "84672ffc",
  description: Kartony24Description,
  photoUrls: {
    1.0: [
      "karton-szary-zamkniety-z-wymiarami.webp",
      "karton-szary-otwarty.webp",
    ],
    1.2: [
      "karton-bialy-zamkniety-z-wymiarami.webp",
      "karton-bialy-otwarty.webp",
    ],
  },
  rating: 4.81,
  opinions: GENERIC_OPINIONS,
  variables: [
    {
      type: "real",
      min: 10,
      max: 500,
      name: "length",
      initialValue: 200,
      label: "Długość",
      unit: "mm",
      step: 1,
    },
    {
      type: "real",
      min: 50,
      max: 500,
      name: "width",
      initialValue: 100,
      label: "Szerokość",
      unit: "mm",
      step: 1,
    },
    {
      type: "real",
      min: 50,
      max: 200,
      name: "height",
      initialValue: 100,
      label: "Wysokość",
      unit: "mm",
      step: 1,
    },
    {
      type: "toggle",
      options: [
        {
          name: "Fala E (1,5)",
          value: 1,
        },
        {
          name: "Fala B (2,6)",
          value: 1.3,
        },
      ],
      initialValue: 1,
      label: "Rodzaj tektury (grubość [mm])",
      name: "material",
    },
    {
      type: "colorChoice",
      options: [
        {
          name: "Szary",
          value: 1.0,
          color: "#eac89a",
        },
        {
          name: "Biały",
          value: 1.2,
          color: "#ffffff",
        },
      ],
      initialValue: 1.0,
      label: "Kolor kartonu",
      name: "color",
    },
    {
      type: "int",
      initialValue: 1,
      label: "Ilość sztuk",
      name: "quantity",
    },
  ],
  breadCrumbs: ["Kartony24", "Kartony", "Kartony na wymiar"],
  formula: (context) =>
    (context["length"] * context["height"] * 2 +
      context["height"] * context["width"] * 2 +
      context["width"] * context["length"] * 2) *
      0.00001 *
      context["color"] *
      context["material"] +
    2,

  parameters: [
    {
      name: "Rodzaj produktu",
      value: "Karton automatyczny z paskiem klejowym",
    },
    { name: "Materiał", value: "Tektura 3-warstwowa" },
    { name: "Gramatura", value: "360 g/m2" },
    { name: "Pojemność maksymalna", value: "20 L" },
    { name: "Lokalizacja paska klejowego", value: "Na bocznej ścianie" },
    {
      name: "Funkcjonalność",
      value: "Automatyczne dno, pasek klejowy",
    },
    { name: "Czas montażu", value: "Złożenie w 2 sekundy bez użycia taśmy" },
    { name: "Ułatwienia dla klienta", value: "Łatwe otwieranie dzięki zrywce" },
  ],
};

export const KARTONY_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl: "https://kartoniki.pl/wp-content/uploads/2022/08/logo.jpg",
  logoOnBackground: false,
  primaryColor: "#222222",
  // primaryColor: "#7d4683",
  secondaryColor: "#b0825f",
  configColor: "#b0825f",
  companyName: "kartoniki",
};
