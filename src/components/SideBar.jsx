import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "./Context/Context";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
function SideBar() {
  let navigate = useNavigate();
  const { handleLanguageChange, sideBarOpen, } =
    useContext(LanguageContext);
  const { t } = useTranslation();
  const [links, setLinks] = useState([]);
  let sidebarWidth = sideBarOpen ? {xs: "40%", sm: "200px", md: "240px"} : "0px";

  useEffect(() => {
    setLinks([
      { path: "/home", name: t("dashboard") },
      { path: "/Comparison", name: t("comparison") },
      { path: "/pricingoffers", name: t("pricingoffters") },
    ]);
  }, [t]);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#0e0e0e",
          position: "fixed",
          width: sidebarWidth,
          left: "0",
          top: "0",
          bottom: "0",
          right:'0',
          color: "#fff",
          boxShadow: "0 8px 16px -2px rgba(40,45,62,.24)",
          zIndex: "99999",
          height: "auto",
          transition:'700ms width'
 
        }}
      >
      
        <Box
          sx={{
            width: "100%",
            display:sideBarOpen? 'flex':'none',
            alignItems: "end",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
            pt: "30px",
       
          }}
        >
          <Box
            sx={{
              mx: "auto",
              mb: "20px",
              backgroundColor: "#fff",
              padding: { xs: "10px", xl: "15px" }, // Responsive padding
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: { xs: "40px", xl: "100px" }, // Responsive logo size
                height: { xs: "40px", xl: "100px" },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                component="img"
                src={logo}
              />
            </Box>
          </Box>
          {links.map((link) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const isActive = useLocation().pathname === link.path;

            return (
              <Typography
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "90%",
                  backgroundColor: isActive ? "#114639" : "transparent",
                  color: isActive ? "white" : "inherit",
                  fontStyle: isActive ? "bolder" : "normal",
                  borderRadius: isActive ? "10px 0px 0px 10px" : "0px",
                  height: isActive ? "40px" : "30px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#114639",
                    fontStyle: "bolder",
                    height: "40px",
                    borderRadius: "10px 0px 0px 10px",
                  },
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive text size
                }}
                onClick={() => navigate(link.path)}
                key={link.name}
              >
                {link.name}
              </Typography>
            );
          })}
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Button
              sx={{
                borderRadius: "8px",
                width: { xs: "60px", md: "80px" }, // Responsive button size
                height: "40px",
                color: "#fff",
                transition: "background-color 0.3s ease",
                fontSize: { xs: "0.75rem", md: "1rem" }, // Responsive font size
              }}
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                width: { xs: "60px", md: "80px" }, // Responsive button size
                height: "40px",
                color: "#fff",
                transition: "background-color 0.3s ease",
                fontSize: { xs: "0.75rem", md: "1rem" }, // Responsive font size
              }}
              onClick={() => handleLanguageChange("ar")}
            >
              AR
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
