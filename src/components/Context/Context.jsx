import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
      setDirection(storedLanguage === "en" ? "ltr" : "rtl");
    }
  }, [i18n]);

  const handleLanguageChange = (lng) => {
    localStorage.setItem("language", lng);
    setLanguage(lng);
    i18n.changeLanguage(lng);
    setDirection(lng === "en" ? "ltr" : "rtl");
  };

  return (
    <LanguageContext.Provider value={{ language, direction, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  return useContext(LanguageContext);
};
