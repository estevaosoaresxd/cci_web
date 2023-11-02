import * as React from "react";

import {
  Typography,
  Grid,
  Box,
  Paper,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Avatar,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeDefault } from "../../shared/theme/themeDefault";
import image from "../../shared/assets/images/bons-fluidos.png";
import logo from "../../shared/assets/images/bons-fluidos-logo-white.png";

import { useNavigate } from "react-router-dom";
import CopyrightBase from "../../shared/components/CopyrightBase";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    navigate(`/home`);
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                height: 50,
                width: 50,
                bgcolor: themeDefault.palette.primary.main,
              }}
            >
              <img src={logo} alt="logo" width={35} height={30} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar usuário"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item>
                  <Link onClick={() => navigate("/register")} variant="body2">
                    {"Não tem uma conta? Registre-se"}
                  </Link>
                </Grid>
              </Grid>
              <CopyrightBase sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
