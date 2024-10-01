import { Container, Box, Typography, TextField, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        // background: "linear-gradient(135deg, #FF6F61 0%, #F7B733 100%)",
        backgroundColor:'#F3F3F3',
        height: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: "30px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Box sx={{ width: "100px", mb: 2 }}>
            <Box sx={{ width: "100%" }} component="img" src={logo} />
          </Box>

          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
          >
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
             
         
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
             
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
                navigate("/home");
              }}
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "30px",
                height: "40px",
                backgroundColor: "#114639",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#114645",
                },
                transition: "background-color 0.3s ease",
              }}
            >
              Register
            </Button>
            <Typography variant="body2"  align="center">
              Already have an account?{" "}
              <Button onClick={() => navigate("/login")} color="inherit">
                Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterPage;
