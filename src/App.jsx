import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import Comparison from "./components/Comparison";
import Home from "./components/Home";
import Reports from "./components/Reports";
import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";
import {
  LanguageProvider,
} from "./components/Context/Context";
import PricingOffers from "./components/Context/PricingOffers";

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        slotProps: {
          inputLabel: {
            sx: {
              fontSize: "14px",
            },
          },
        },
      },
    },
  },
});
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/comparison", element: <Comparison /> },
        { path: "/home", element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "/reports", element: <Reports /> },
        { path: "/pricingoffers", element: <PricingOffers /> },
      ],
    },

    { index: true, element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
