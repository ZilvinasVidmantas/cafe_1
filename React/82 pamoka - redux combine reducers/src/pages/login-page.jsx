import React, { useState } from 'react';
import {
  TextField,
  Grid,
} from '@mui/material';
import AuthForm from '../components/auth-form';

/*
  Surišti įvesties laukų duomenis su LoginPage state kintamaisiais (email, password)

  Surišus šiuos duomenis, atvaspausdinti juos konsolėje,
  kiekvieną kart pakeitus nors vieną ir įvesties laukų

  15min
  10min
  tęsiame 19:20
*/

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log({
    email, password,
  });

  return (
    <AuthForm
      title="Prisijungti"
      linkTo="/register"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;
