import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useContext } from "react";
import { LanguageContext } from "./Context/Context";

function Layout() {
  const { direction, sideBarOpen } = useContext(LanguageContext);

  return (
    <Box
      sx={{
        direction,
        width: "100%",
      }}
    >
      <Box>{sideBarOpen && <SideBar />}</Box>

      <Box>
        <Navbar />

        <Box
          sx={{
            width: sideBarOpen ? "80%" : "90%",
            mx: "auto",
            ml: sideBarOpen ? {xs:"0",md:"250px"} : "0",
            padding: "20px"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
