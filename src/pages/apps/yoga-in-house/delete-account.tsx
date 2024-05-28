import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function DeleteAccount() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        my={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          py={4}
          px={8}
          bgcolor={(theme) => theme.palette.grey[50]}
          borderRadius={4}
        >
          <Typography component="h1" variant="h5" my={2}>
            Remover conta do Yoga In House
          </Typography>

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
            <Typography color="white">Confirmar e remover conta</Typography>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/contact" variant="body2">
                Precisa de ajuda? Fale conosco
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
