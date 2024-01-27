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

declare module "@mui/material/styles" {
  interface Palette {
    config: Palette["primary"];
  }

  interface PaletteOptions {
    config?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/ToggleButtonGroup" {
  interface ToggleButtonGroupPropsColorOverrides {
    config: true;
  }
}

export const MockupPage = ({ mockup }: Props) => {
  const theme = useMemo(() => {
    const partialTheme = createTheme({
      palette: {
        primary: {
          main: mockup.primaryColor,
        },
        secondary: {
          main: mockup.secondaryColor,
        },
        //   config: {
        //     main: mockup.configColor,
        //   },
      },
    });
    return createTheme(partialTheme, {
      // Custom colors created with augmentColor go here
      palette: {
        config: partialTheme.palette.augmentColor({
          color: {
            main: mockup.configColor,
          },
          name: "config",
        }),
      },
    });
  }, [mockup.primaryColor, mockup.secondaryColor, mockup.configColor]);

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
