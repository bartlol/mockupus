import { Item } from "../Models/Item";
import { Mockup } from "../Models/Mockup";
import { GENERIC_OPINIONS } from "./genericOpinions";
import { ZaslonyDescription } from "../components/Descriptions/ZaslonyDescription";

const item: Item = {
  name: "Zasłona z miękkiej półmatowej tkaniny welwetowej",
  productId: "84672ffc",
  description: ZaslonyDescription,
  photoUrls: {
    1.0: [
      "https://efpim.eurofirany.com.pl/product_images/dd/9e/52773/image-thumb__52773__PC_SI-EURO-550/dd9ec46464df39e320580056bbca71c4.webp",
      "https://efpim.eurofirany.com.pl/product_images/04/45/52778/image-thumb__52778__PC_SI-EURO-550/0445adc44a0bc502039e6f6f293a2abe.webp",
      "https://efpim.eurofirany.com.pl/product_images/32/34/52776/image-thumb__52776__PC_SI-EURO-550/32345d4162762bf855255f081f09b324.webp",
    ],
    1.05: [
      "https://efpim.eurofirany.com.pl/product_images/70/fb/370436/image-thumb__370436__PC_SI-EURO-550/70fb49754dde15cc1a8f9a574098ba5c.webp",
      "https://efpim.eurofirany.com.pl/product_images/4b/04/370443/image-thumb__370443__PC_SI-EURO-550/4b0451e96b8cd8918e81b534c540d29c.webp",
      "https://efpim.eurofirany.com.pl/product_images/22/40/370442/image-thumb__370442__PC_SI-EURO-550/2240f1e76dd10a934bfae642f733e897.webp",
    ],
    1.1: [
      "https://efpim.eurofirany.com.pl/product_images/40/e2/157285/image-thumb__157285__PC_SI-EURO-550/40e22feb8d42101be8e0e639f3cbc169.webp",
      "https://efpim.eurofirany.com.pl/product_images/1c/12/157289/image-thumb__157289__PC_SI-EURO-550/1c12fae90367d0a56dba1b476c2353b0.webp",
      "https://efpim.eurofirany.com.pl/product_images/22/95/157288/image-thumb__157288__PC_SI-EURO-550/22956ec431344c8939b7d63c80f98ee9.webp",
    ],
  },
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
          name: "Silver",
          value: 1.0,
          color: "#adb8b9",
        },
        {
          name: "Jasnowrzosowy",
          value: 1.05,
          color: "#9e7266",
        },
        {
          color: "#215b3a",
          value: 1.1,
          name: "ButelkowyZielony",
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
