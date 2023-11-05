import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";

import {
  Container,
  Typography,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Box,
} from "@mui/material";

import logo from "../../shared/assets/images/bons-fluidos-logo-white.png";

import { themeDefault } from "../../shared/theme/themeDefault";
import { useNavigate } from "react-router-dom";
import CopyrightBase from "../../shared/components/CopyrightBase";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    navigate(`/login`);
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            Registrar
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Primeiro nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Ultimo nome"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" onClick={() => navigate(`/login`)}>
                  Já tem uma conta? Clique aqui.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyrightBase sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
