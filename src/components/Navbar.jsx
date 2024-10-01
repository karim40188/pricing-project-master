import { AppBar,Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import logo from '../assets/logo.png';

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

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: "#000" }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", p: '10px' }}>
        <Box sx={{ width: '50px' }}>
          <Box sx={{ width: '100%' }} component="img" src={logo} />
        </Box>
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
