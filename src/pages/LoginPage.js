import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSnackbar } from 'notistack';


import CopyrightComponent from '../components/CopyrightComponent';
import { useAuth } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function LoginPage() {

  const auth = useAuth();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    try {
      await auth.authenticate(data.get('email'), data.get('password'));
      enqueueSnackbar("Login realizado com sucesso!", {variant: 'success'});
      navigate("/dashboard");
    } catch (error) {
      enqueueSnackbar("Erro ao realizar o login!", {variant: 'error'});
      console.error(error);
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://res.cloudinary.com/compet-engenharia/image/upload/v1634571484/COMPET_ENGENHARIA_-_Imagem_Padr%C3%A3o_-_SITE_C_jxdtum.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>

              {/* <Paper>
                <img alt="logo" src="https://www.competengenharia.com.br/assets/img/logo.png" width={100} elevation={0}/>
            </Paper> */}

              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/forget-password" variant="body2">
                      Esqueceu sua senha?
                    </Link>
                  </Grid>
                </Grid>
                <CopyrightComponent sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}