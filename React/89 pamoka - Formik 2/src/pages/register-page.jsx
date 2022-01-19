import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from '@mui/material';
import { useFormik } from 'formik';
import AuthForm from '../components/auth-form';
import routes from '../routing/routes';

const RegisterPage = () => {
  const {
    values, touched, errors, isValid, dirty,
  } = useFormik({

  });

  return (
    <>
      <pre style={{
        position: 'fixed',
        top: 300,
        left: 0,
        paddingLeft: 20,
      }}
      >
        {JSON.stringify({
          values, touched, errors, isValid, dirty,
        }, null, 4)}
      </pre>
      <div style={{ marginLeft: 150 }}>
        <AuthForm
          title="Registracija"
          linkTo={routes.LoginPage}
          linkTitle="Jau turite paskyrą? Prisijunkite"
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Vardas"
                  // Props provided by Formik
                  name="name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Pavardė"
                   // Props provided by Formik
                  name="surname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="El. paštas"
                   // Props provided by Formik
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Slaptažodis"
                  type="password"
                  // Props provided by Formik
                  name="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Pakartokite Slaptažodį"
                  type="password"
                  // Props provided by Formik
                  name="repeatPassword"
                />
              </Grid>
              <Grid item sx={{ mb: 2 }} xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                       // Props provided by Formik
                      name="subscribed"
                    />
                  )}
                  label="Noriu gauti su rinkodara susijusius pranešimus"
                />
              </Grid>
            </Grid>
          </Box>
        </AuthForm>
      </div>
    </>
  );
};

export default RegisterPage;
