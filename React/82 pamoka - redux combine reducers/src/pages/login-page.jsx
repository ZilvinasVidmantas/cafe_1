import React from 'react';
import {
  TextField,
  Grid,
} from '@mui/material';
import AuthForm from '../components/auth-form';

const title = ['Prisijungti'];

const LoginPage = () => (
  <AuthForm
    title={title}
    linkTo="/login"
    linkTitle="Neturite paskyros? Registruokitės"
  >
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="El. paštas"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 4 }}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Slaptažodis"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Grid>
    </Grid>
  </AuthForm>
);

export default LoginPage;
