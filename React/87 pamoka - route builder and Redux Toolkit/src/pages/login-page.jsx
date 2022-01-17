import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  TextField,
  Grid,
  Alert,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { loginSuccess } from '../store/auth';
import AuthForm from '../components/auth-form';
import ApiService from '../services/api-service';
import routes from '../routing/routes';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState(null);
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
        const redirectTo = searchParams.get('redirectTo');
        const loginSuccessAction = loginSuccess({ user, token, redirectTo });
        dispatch(loginSuccessAction);
      } catch (error) {
        setErrorMsg(error.message);
        setLoading(false);
      }
    })();
  };

  return (
    <AuthForm
      title="Prisijungti"
      linkTo={routes.RegisterPage}
      linkTitle="Neturite paskyros? Registruokitės"
      onSubmit={handleLogin}
      loading={loading}
    >
      <Grid container spacing={4}>
        {
          errorMsg
            ? (
              <Grid item xs={12}>
                <Alert
                  severity="error"
                  action={(
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => setErrorMsg(null)}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                )}

                >
                  {errorMsg}
                </Alert>
              </Grid>
            )
            : null
        }

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
