import React, { useState } from 'react';
import {
  TextField,
  Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createLoginSuccessAction } from '../store/auth/action-creators';
import AuthForm from '../components/auth-form';
import ApiService from '../services/api-service';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    (async () => {
      try {
        setLoading(true);
        const { user, token } = await ApiService.login({ email, password });
        dispatch(createLoginSuccessAction({ user, token }));
      } catch (error) {
        console.log('------- Neprisijungem ----------');
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <AuthForm
      title="Prisijungti"
      linkTo="/register"
      linkTitle="Neturite paskyros? Registruokitės"
      onSubmit={handleLogin}
      loading={loading}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="El. paštas"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            label="Slaptažodis"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;
