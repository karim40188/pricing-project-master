import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useContext } from "react";
import { LanguageContext } from "./Context/Context";

function Layout() {
  const { direction } = useContext(LanguageContext);

  return (
    <Box sx={{ display: "flex", direction }}>
      <SideBar />
      <Box sx={{ ml: "15%" }}>
        <Navbar/>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
