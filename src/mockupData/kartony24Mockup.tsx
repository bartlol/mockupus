import { Item } from "../Models/Item";
import { Mockup } from "../Models/Mockup";
import { GENERIC_OPINIONS } from "./genericOpinions";
import { Kartony24Description } from "../components/Descriptions/Kartony24Description";

const item: Item = {
  name: "Karton automatyczny z paskiem klejowym",
  productId: "84672ffc",
  description: Kartony24Description,
  // "Produkt polskiej produkcji\nGablota gotowa do użytku\nBardzo wysoka jakoś wykonania",
  photoUrls: [
    "https://kartony24.eu/userdata/public/gfx/36050/Karton-automatyczny-z-paskiem-klejowym-400x300x190-zamkniety.webp",
    "https://kartony24.eu/userdata/public/gfx/36049/Karton-automatyczny-z-paskiem-klejowym-i-zrywka-400x300x190.webp",
    "https://kartony24.eu/userdata/public/gfx/36053/Karton-automatyczny-z-paskiem-klejowym-400x300x190-pasek-klejowy.webp",
  ],
  rating: 4.81,
  opinions: GENERIC_OPINIONS,
  variables: [
    {
      type: "choice",
      options: [
        {
          name: "Fala B (grubość 2,6mm)",
          value: 1.3,
        },
        {
          name: "Fala E (grubość 1,5mm)",
          value: 1,
        },
      ],
      initialValue: 1,
      label: "Rodzaj tektury",
      name: "material",
    },
    {
      type: "choice",
      options: [
        {
          name: "Karton szary",
          value: 1,
        },
        {
          name: "Karton biały",
          value: 1.2,
        },
      ],
      initialValue: 1,
      label: "Kolor kartonu",
      name: "color",
    },
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
      type: "int",
      initialValue: 1,
      label: "Ilość sztuk",
      name: "quantity",
    },
  ],
  breadCrumbs: ["Kartony24", "Kartony", "Kartony na wymiar"],
  formula: (context) =>
    (context["length"] + context["width"] + context["height"]) *
    0.01 *
    context["color"] *
    context["material"],
};

export const KARTONY24_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl: "https://wyceny.kartony24.eu/lp/img/logo.png",
  logoOnBackground: true,
  primaryColor: "#7d4683",
  companyName: "Kartony24",
};
