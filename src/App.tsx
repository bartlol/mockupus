import { ThemeProvider, createTheme } from "@mui/material";
import { ShopPage } from "./pages/ShopPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8888aa",
    },
    secondary: {
      main: "#444488",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ShopPage />
    </ThemeProvider>
  );
}

export default App;
