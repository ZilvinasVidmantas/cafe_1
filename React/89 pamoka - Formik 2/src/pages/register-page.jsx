/* eslint-disable */
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

/*
  iki 19:02 - pertrauka
  iki 19:17 -> uzduotis:
    Sukurkite įvesties laukų validaciją, naudodami yup biblioteką
*/



const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  repeatPassword: '',
  subscribed: false,
};

const RegisterPage = () => {
  const {
    values, touched, errors, isValid, dirty,
    handleChange,
  } = useFormik({
    initialValues,
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
                  onChange={handleChange}
                  value={values.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Pavardė"
                   // Props provided by Formik
                  name="surname"
                  onChange={handleChange}
                  value={values.surname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="El. paštas"
                   // Props provided by Formik
                  name="email"
                  onChange={handleChange}
                  value={values.email}
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
                  onChange={handleChange}
                  value={values.password}
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
                  onChange={handleChange}
                  value={values.repeatPassword}
                />
              </Grid>
              <Grid item sx={{ mb: 2 }} xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                       // Props provided by Formik
                      name="subscribed"
                      checked={values.subscribed}
                      onChange={handleChange}
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
