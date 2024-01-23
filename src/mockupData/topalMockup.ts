import { Item } from "../Models/Item";
import { Mockup } from "../Models/Mockup";
import { GENERIC_OPINIONS } from "./genericOpinions";

const item: Item = {
  name: "Gablota Wewnętrzna Antracyt",
  productId: "84672ffc",
  description:
    "Produkt polskiej produkcji\nGablota gotowa do użytku\nBardzo wysoka jakoś wykonania",
  photoUrls: [
    "https://topal.com.pl/hpeciai/a5eb1aae15515d88c0ea1fed36e96e9d/pol_pm_Gablota-Wewnetrzna-Antracyt-Konfigurator-1958_2.png",
    "https://topal.com.pl/hpeciai/b1735bfdfe7baecaaec1ff90f4d455ea/pol_pl_Gablota-Wewnetrzna-Antracyt-Konfigurator-1958_5.png",
    "https://topal.com.pl/hpeciai/260cd00b3b58c3e8be0b73e1cddaf2cc/pol_pl_Gablota-Wewnetrzna-Antracyt-Konfigurator-1958_8.png",
  ],
  rating: 4.61,
  opinions: GENERIC_OPINIONS,
  variables: [
    {
      type: "choice",
      options: [
        {
          name: "Aluminium",
          value: 500,
        },
        {
          name: "Miedź",
          value: 300,
        },
        {
          name: "Stal",
          value: 400,
        },
      ],
      initialValue: 400,
      label: "Materiał",
      name: "material",
    },
    {
      type: "real",
      min: 10,
      max: 100,
      name: "length",
      initialValue: 50,
      label: "Długość",
      unit: "cm",
      step: 1,
    },
    {
      type: "real",
      min: 50,
      max: 200,
      name: "width",
      initialValue: 100,
      label: "Szerokość",
      unit: "cm",
      step: 1,
    },
    {
      type: "boolean",
      initialValue: false,
      label: "Złożone",
      name: "assembled",
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
    "Produkty na wymiar",
    "Gabloty na wymiar",
    "Gablota Wewnętrzna Antracyt",
  ],
  formula: (context) =>
    context["length"] * context["width"] +
    context["material"] +
    (context["assembled"] ? 666 : 0),
};

export const TOPAL_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl: "https://topal.com.pl/data/gfx/mask/pol/logo_1_big.png",
  primaryColor: "#9999bb",
  companyName: "Topal",
  logoOnBackground: false,
};
