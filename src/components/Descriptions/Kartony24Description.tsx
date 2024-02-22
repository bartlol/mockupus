import React from "react";
import { Typography } from "@mui/material";

export const Kartony24Description = () => {
  return (
    <>
      <Typography fontWeight={"bold"}>Karton klapkowy </Typography>
      <Typography fontWeight={"bold"}>Szybki i wygodny w pakowaniu</Typography>
      <Typography>
        Pudełko wykonane z tektury 3-warstwowej o fali B - gramatura 360 g/m2 o
        maksymalnej pojemności 20 L i wymiarach wewnętrznych 394x288x184 mm.
      </Typography>
      <Typography>
        <Typography fontWeight={"bold"} component="span">
          Pasek klejowy jest na bocznej ścianie.
        </Typography>{" "}
        Dziwny ten karton, pomyślisz. I masz rację. Jest inny niż wszystkie.
        Stworzyliśmy go w taki sposób z dwóch powodów. Po pierwsze -{" "}
        <Typography fontWeight={"bold"} component="span">
          mieści się w skrytce o gabarycie B
        </Typography>{" "}
        więc Twoje koszty wysyłki nie wzrosną. Po drugie- jako producent
        kartonów dbamy o to, by w procesie produkcyjnym nie marnować materiału.
        Jest więc oszczędnie i ekologicznie. To jednak nie wszystkie jego
        zalety. Karton posiada automatyczne dno, pasek klejowy oraz zrywkę. Jest
        biodegradowalny. Dzięki niemu{" "}
        <Typography fontWeight={"bold"} component="span">
          ograniczysz czas na pakowanie swoich
        </Typography>{" "}
        produktów do minimum. Bez użycia taśmy złożysz go w 2 sekundy, a dzięki
        zrywce Twój Klient otworzy paczkę z lekkością i uśmiechem w takim samym
        czasie.
      </Typography>
    </>
  );
};
