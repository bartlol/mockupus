import React, { useMemo } from "react";
import { Mockup } from "../../Models/Mockup";
import { PageLayout } from "../../layout/PageLayout";
import { ItemDisplay } from "../../components/ItemDisplay/ItemDisplay";
import { ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import { Logo } from "../../components/Logo/Logo";

type Props = {
  mockup: Mockup;
};

export const MockupPage = ({ mockup }: Props) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: mockup.primaryColor,
          },
          secondary: {
            main: "#444488",
          },
        },
      }),
    [mockup.primaryColor]
  );

  return (
    <ThemeProvider theme={theme}>
      <PageLayout
        appBar={<Navbar logo={<Logo logoUrl={mockup.companyLogoUrl} />} />}
      >
        <ItemDisplay item={mockup.item} />
      </PageLayout>
    </ThemeProvider>
  );
};
