import React, { useMemo } from "react";
import { Mockup } from "../../Models/Mockup";
import { PageLayout } from "../../layout/PageLayout";
import { ItemDisplay } from "../../components/ItemDisplay/ItemDisplay";
import { ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import { Logo } from "../../components/Logo/Logo";
import { Footer } from "../../components/Footer/Footer";

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
        appBar={
          <Navbar
            logo={
              <Logo
                logoUrl={mockup.companyLogoUrl}
                withBackground={mockup.logoOnBackground}
              />
            }
          />
        }
        footer={
          <Footer
            logo={
              <Logo
                logoUrl={mockup.companyLogoUrl}
                withBackground={mockup.logoOnBackground}
              />
            }
            companyName={mockup.companyName}
          />
        }
      >
        <ItemDisplay item={mockup.item} />
      </PageLayout>
    </ThemeProvider>
  );
};
