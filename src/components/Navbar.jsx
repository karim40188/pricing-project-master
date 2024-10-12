import { AppBar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
// import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { LanguageContext } from "./Context/Context";

const Navbar = () => {
  const { t } = useTranslation(); // استخدام useTranslation
  const navItems = [
    { path: "/home", name: t("dashboard") },
    { path: "/pricingoffers", name: t("pricing Offers") },
    { path: "/Comparison", name: t("comparison") },
  ];

  let { sideBarOpen, setSideBarOpen } = useContext(LanguageContext);
  function handleSidebar() {
    setSideBarOpen(!sideBarOpen);
  }

  let sidebarWidth = sideBarOpen ? { xs: "40%", sm: "200px", md: "240px" } : "";


  return (
    <AppBar
      sx={{
        backgroundColor: "#333333",
        color: "#fff",
        position: "fixed",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "10px",
          ml:sidebarWidth
          // ml:"300px"
        }}
      >
      
          <IoMdMenu
            onClick={handleSidebar}
            style={{
              fontSize: "32px",
              zIndex: "9999",
              display: "flex",
            }}
          />
    

        <Box sx={{ display: "flex" }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{ textTransform: "capitalize" }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        </Box>
     
    </AppBar>
  );
};

export default Navbar;
