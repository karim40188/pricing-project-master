import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useContext } from "react";
import { LanguageContext } from "./Context/Context";

function Layout() {
  const { direction, sideBarOpen } = useContext(LanguageContext);
  let sidebarWidth = sideBarOpen ? {xs: "40%", sm: "200px", md: "240px"} : "";

  return (
    <Box
      sx={{
        width: "100%",
        direction,
      }}
    >
      <Box>{sideBarOpen && <SideBar />}</Box>

      <Box>
        <Navbar />
        <Box
          sx={{
            width: sideBarOpen ? "80%" : "95%",
            margin: "auto",
            padding: "30px",
            mt: {xs:'15%',md:"5%"},
            ml: sidebarWidth,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
