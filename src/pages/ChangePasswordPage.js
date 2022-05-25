import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CopyrightComponent from '../components/CopyrightComponent';


const theme = createTheme();

export default function ChangePasswordPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="newpassword"
              label="Senha"
              name="newpassword"
              autoComplete="newpassword"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeatpassword"
              label="Repita a senha"
              type="repeatpassword"
              id="repeatpassword"
              autoComplete="repeatpassword"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Alterar Senha
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Retornar para o login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyrightComponent sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}