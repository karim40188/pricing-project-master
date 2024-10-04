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
    { path: "/Pricelist", name: t("priceList") },
    { path: "/Comparison", name: t("comparison") },
    { path: "/transactions", name: t("transactions") },
    { path: "/profitanalysis", name: t("profitAnalysis") },
    { path: "/reports", name: t("reports") },
    { path: "/settings", name: t("settings") },
  ];

  let { sideBarOpen, setSideBarOpen } = useContext(LanguageContext);

  function handleSidebar() {
    setSideBarOpen(!sideBarOpen);
  }

  return (
    <AppBar
      // position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        position:'relative',
        top:'0',
        left:'0',
        right:'0',
        width:'100%'

        // width: sideBarOpen ? "100%" : "1340px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "10px",
        }}
      >
        <IoMdMenu
          onClick={handleSidebar}
          style={{ fontSize: "32px", zIndex: "9999" }}
        />
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
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
