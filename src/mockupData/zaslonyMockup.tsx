import { Item } from "../Models/Item";
import { Mockup } from "../Models/Mockup";
import { GENERIC_OPINIONS } from "./genericOpinions";
import { ZaslonyDescription } from "../components/Descriptions/ZaslonyDescription";

const item: Item = {
  name: "Zasłona z miękkiej półmatowej tkaniny welwetowej",
  productId: "84672ffc",
  description: ZaslonyDescription,
  // "Produkt polskiej produkcji\nGablota gotowa do użytku\nBardzo wysoka jakoś wykonania",
  photoUrls: [
    "https://efpim.eurofirany.com.pl/product_images/7c/20/306859/image-thumb__306859__PC_SI-EURO-550/7c20bb3b090cc8873b6c55f146aa80fb.webp",
    "https://efpim.eurofirany.com.pl/product_images/2f/9a/306865/image-thumb__306865__PC_SI-EURO-550/2f9ad8cbf8b8975834eab729690a37ed.webp",
    "https://efpim.eurofirany.com.pl/product_images/42/a8/306866/image-thumb__306866__PC_SI-EURO-550/42a81e2e1e82996f779a2f3ab231fe20.webp",
  ],
  rating: 4.81,
  opinions: GENERIC_OPINIONS,
  variables: [
    {
      type: "real",
      min: 50,
      max: 400,
      name: "height",
      initialValue: 250,
      label: "Wysokość",
      unit: "cm",
      step: 1,
    },
    {
      type: "real",
      min: 100,
      max: 1000,
      name: "width",
      initialValue: 500,
      label: "Szerokość",
      unit: "cm",
      step: 1,
    },
    {
      type: "toggle",
      options: [
        {
          name: "Nie",
          value: 0,
        },
        {
          name: "Tak",
          value: 100,
        },
      ],
      initialValue: 0,
      label: "Podwiązka",
      name: "podwiazka",
    },
    {
      type: "colorChoice",
      options: [
        {
          name: "Poseidon",
          value: 1.0,
          color: "#133955",
        },
        {
          name: "LightSkyBlue",
          value: 1.01,
          color: "#87CEFA",
        },
        {
          name: "Olive",
          value: 1.02,
          color: "#808000",
        },
        {
          name: "Orchid",
          value: 1.03,
          color: "#DA70D6",
        },

        {
          name: "LavenderBlush",
          value: 1.04,
          color: "#FFF0F5",
        },
        {
          name: "Wheat",
          value: 1.05,
          color: "#F5DEB3",
        },
      ],
      initialValue: 1.0,
      label: "Kolor tkaniny",
      name: "color",
    },
    {
      type: "colorChoice",
      options: [
        {
          name: "Złoty",
          value: 1.0,
          color: "#b59e5f",
        },
        {
          name: "Srebrny",
          value: 1.2,
          color: "#c0c0c0",
        },
        {
          name: "Miedziany",
          value: 1.3,
          color: "#b87333",
        },
      ],
      initialValue: 1.0,
      label: "Kolor przelotki",
      name: "guideColor",
    },

    {
      type: "int",
      initialValue: 1,
      label: "Ilość sztuk",
      name: "quantity",
    },
  ],
  breadCrumbs: ["Zasłony", "Zasłony szyte na wymiar"],
  formula: (context) =>
    context["height"] * context["width"] * 0.001 * context["color"] +
    context["guideColor"] * Math.floor(context["width"] / 25) * 2 +
    context["podwiazka"] +
    50,

  parameters: [
    {
      name: "Kod tkaniny",
      value: "372153",
    },
    { name: "Skład", value: "100% poliester" },
    { name: "Szerokość tkaniny", value: "145 cm" },
    {
      name: "Cechy tkanin",
      value: "welwetowa, z nieregularnym błyszczącym nadrukiem",
    },
    { name: "Zaciemnienie", value: "średnie" },
    { name: "Gramatura", value: "210 g/m2" },
  ],
};

export const ZASLONY_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl:
    "https://media.sfera.com.pl/_versions/logo/20150602143935-eurofirany_logo_large.png",
  logoOnBackground: false,
  primaryColor: "#222222",
  secondaryColor: "#b0825f",
  configColor: "#b0825f",
  companyName: "eurofirany",
};
