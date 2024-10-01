import { Box, Button, Typography } from "@mui/material";
import {  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "./Context/Context";
import { useTranslation } from "react-i18next";

function SideBar() {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const { handleLanguageChange } = useLanguage();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks([
      { path: "/home", name: t("dashboard") },
      { path: "/Pricelist", name: t("priceList") },
      { path: "/Comparison", name: t("comparison") },
      { path: "/transactions", name: t("transactions") },
      { path: "/profitanalysis", name: t("profitAnalysis") },
      { path: "/reports", name: t("reports") },
      { path: "/settings", name: t("settings") },
    ]);
  }, [t]);

  const handleLanguage = (lng) => {
    handleLanguageChange(lng);
  };

  const location = useLocation();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#0e0e0e",
          width: "15%",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
          pt: "30px",
          boxShadow: "0 8px 16px -2px rgba(40,45,62,.24)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
            pt: "30px",
          }}
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Typography
                key={link.name}
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
                }}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </Typography>
            );
          })}
          <Box sx={{ display: "flex" }}>
            <Button onClick={() => handleLanguage("en")}>English</Button>
            <Button onClick={() => handleLanguage("ar")}>عربي</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
