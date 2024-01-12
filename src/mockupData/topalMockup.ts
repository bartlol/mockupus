import { Item } from "../Models/Item";
import { Opinion } from "../Models/Opinion";
import { Mockup } from "../Models/Mockup";

const opinions: Opinion[] = [
  {
    date: new Date("2024-01-04T22:11:00.123Z"),
    opinion: "Solidne wykonanie, polecam. Wymiary sie zgadzają. Szczelna.",
    rate: 5,
    username: "Grzegorz Floryda",
  },
  {
    date: new Date("2024-01-04T22:11:00.123Z"),
    opinion: "Niezła gablota, vat odprowadzony jak należy.",
    rate: 5,
    username: "MatiVati",
  },
  {
    date: new Date("2024-01-05T20:37:00.222Z"),
    opinion: "Bardzo dobry produkt. Wszystko poszło sprawnie. Troche za żółty.",
    rate: 4,
    username: "Jan2",
  },
  {
    date: new Date("2024-01-06T20:37:00.222Z"),
    opinion: "Wszsystko git.",
    rate: 5,
    username: "Marek",
  },
];
const item: Item = {
  name: "Gablota Wewnętrzna Antracyt",
  companyName: "Fest",
  productId: "84672ffc",
  description:
    "Produkt polskiej produkcji\nGablota gotowa do użytku\nBardzo wysoka jakoś wykonania",
  companyLogoUrl:
    "https://topal.com.pl/data/lang/pol/producers/gfx/projector/6_1.png",
  photoUrls: [
    "https://topal.com.pl/hpeciai/a5eb1aae15515d88c0ea1fed36e96e9d/pol_pm_Gablota-Wewnetrzna-Antracyt-Konfigurator-1958_2.png",
    "https://topal.com.pl/hpeciai/b1735bfdfe7baecaaec1ff90f4d455ea/pol_pl_Gablota-Wewnetrzna-Antracyt-Konfigurator-1958_5.png",
    "https://topal.com.pl/hpeciai/260cd00b3b58c3e8be0b73e1cddaf2cc/pol_pl_Gablota-Wewnetrzna-Antracyt-Konfigurator-1958_8.png",
  ],
  rating: 4.61,
  isFavourite: false,
  opinions,
  variables: [
    {
      type: "real",
      min: 10,
      max: 100,
      name: "length",
      initialValue: 50,
      label: "Długość",
      unit: "cm",
      step: 5,
    },
    {
      type: "real",
      min: 50,
      max: 200,
      name: "width",
      initialValue: 100,
      label: "Szerokość",
      unit: "cm",
      step: 10,
    },
    {
      type: "boolean",
      initialValue: false,
      label: "Złożone",
      name: "assembled",
    },
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
      type: "int",
      initialValue: 1,
      label: "Ilość sztuk",
      name: "quantity",
    },
  ],
};

export const TOPAL_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl: "https://topal.com.pl/data/gfx/mask/pol/logo_1_big.png",
  primaryColor: "#8888aa",
};
