import { Item } from "../Models/Item";
import { Opinion } from "../Models/Opinion";
import { Mockup } from "../Models/Mockup";

const opinions: Opinion[] = [
  {
    date: new Date("2024-01-04T22:11:00.123Z"),
    opinion: "Koment",
    rate: 5,
    username: "Grzegorz Floryda",
  },
  {
    date: new Date("2024-01-04T22:11:00.123Z"),
    opinion: "Koment2",
    rate: 5,
    username: "MatiVati",
  },
  {
    date: new Date("2024-01-05T20:37:00.222Z"),
    opinion: "komnet3",
    rate: 4,
    username: "Jan2",
  },
  {
    date: new Date("2024-01-06T20:37:00.222Z"),
    opinion: "Koment 4",
    rate: 5,
    username: "Marek",
  },
];
const item: Item = {
  name: "Jakis przedmiot",
  companyName: "Microsoft",
  productId: "sampleId",
  description: "Produkt topowej firmy\nMozna od razy uzywac",
  companyLogoUrl:
    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  photoUrls: [
    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707&q=90&m=6&h=270&w=270&b=%23FF2F2F2F&f=jpg&o=f&aim=true",
  ],
  rating: 2.1,
  isFavourite: true,
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

export const OKNA_MOCKUP: Mockup = {
  item: item,
  companyLogoUrl: "https://topal.com.pl/data/gfx/mask/pol/logo_1_big.png",
  primaryColor: "#559944",
};
