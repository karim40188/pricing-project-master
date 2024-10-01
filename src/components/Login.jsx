import { Container, Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import image from "../assets/Packing_Boxes_2.webp";

const LoginPage = () => {
  let navigate = useNavigate();

  return (
    <Box
    sx={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      backgroundColor: "#F3F3F3",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: "30px",
            background: "rgba(255, 255, 255, 0.1)", // خلفية شفافة
            borderRadius: "15px", // زوايا مستديرة
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // ظل خفيف
            backdropFilter: "blur(25px)", // تأثير ضبابي
            WebkitBackdropFilter: "blur(10px)", // دعم متصفح سفاري
          }}
        >
          <Box sx={{ width: "100px", mb: 2 }}>
            <Box sx={{ width: "100%" }} component="img" src={logo} />
          </Box>

          <Typography component="h1" variant="h5" fontWeight="bold">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              InputLabelProps={{
                style: { color: 'white' }, // Label color
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              onClick={() => {
                navigate("/home"); // الانتقال إلى الصفحة الرئيسية بعد تسجيل الدخول
              }}
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "30px",
                height: "40px",
                backgroundColor: "#114639",
                color:"#fff",
              
                "&:hover": {
                  backgroundColor: "#114639", // لون مختلف عند التحريك
                },
                transition: "background-color 0.3s ease", // تأثير انتقال لونه
              }}
            >
              Login
            </Button>
            <Typography variant="body2" color="#fff" align="center">
              Don&apos;t have an account?{" "}
              <Button onClick={() => navigate("/register")} color="inherit">
                Register
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
