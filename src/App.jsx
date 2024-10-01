import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import Comparison from "./components/Comparison";
import Home from "./components/Home";
import Reports from "./components/Reports";
import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";
import {
  DirectionProvider,
  
  LanguageProvider,
} from "./components/Context/Context";

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
      ],
    },

    { index: true, element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <DirectionProvider>
        <LanguageProvider>
          <RouterProvider router={router}>
            <div>App</div>
          </RouterProvider>
        </LanguageProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
}

export default App;
