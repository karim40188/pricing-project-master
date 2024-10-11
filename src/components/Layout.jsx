import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useContext } from "react";
import { LanguageContext } from "./Context/Context";

function Layout() {
  const { direction, sideBarOpen } = useContext(LanguageContext);
  let sidebarWidth = sideBarOpen ? { xs: "30%", sm: "200px", md: "240px" } : "";

  return (
    <Box
      sx={{
        direction,
        width: "100%",
      }}
    >
      <Box>{sideBarOpen && <SideBar />}</Box>

      <Box>
        <Box
          sx={{
            width: sideBarOpen ? "80%" : "95%",
            margin: "auto",
          
            ml: sidebarWidth,
          }}
        >
          <Navbar />
<Box sx={{ padding: "20px" ,  my:'30px',}}>

          <Outlet />
</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
