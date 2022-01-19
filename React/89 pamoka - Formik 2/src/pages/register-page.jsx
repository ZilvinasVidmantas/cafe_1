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
import * as yup from 'yup';
import AuthForm from '../components/auth-form';
import routes from '../routing/routes';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Is required')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Should only contain letters')
    .min(2, 'At least 2 letters')
    .max(16, '16 letters maximum'),
  surname: yup
    .string()
    .required('Is required')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Should only contain letters')
    .min(2, 'At least 2 letters')
    .max(16, '16 letters maximum'),
  email: yup
    .string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup
    .string()
    .required('Is required')
    .min(8, 'At least 8 letters')
    .max(32, '32 letters maximum')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Should contain Capital letter')
    .matches(/^.*[0-9]+.*$/, 'Should contain number'),
  repeatPassword: yup
    .string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  subscribed: yup 
    .boolean()
    .required('Is required')
});


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
    validationSchema
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
