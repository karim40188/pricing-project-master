import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useContext } from "react";
import { LanguageContext } from "./Context/Context";

function Layout() {
  const { direction, sideBarOpen } = useContext(LanguageContext);

  return (
    <Box sx={{ display: "flex", direction }}>
      {sideBarOpen ? <SideBar /> : ""}

      <Box
        sx={{
          ml: sideBarOpen ? { xs: "45%", md: "15%" } :{xs:'0',xl:'8%'},
          transition: "700ms all",
        }}
      >
        <Navbar/>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
