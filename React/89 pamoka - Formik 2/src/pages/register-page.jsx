/* eslint-disable */
import React, {useState} from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import apiService from '../services/api-service';
import AuthForm from '../components/auth-form';
import routes from '../routing/routes';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(16, '16 letters maximum')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Should only contain letters'),
  surname: yup
    .string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(16, '16 letters maximum')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Should only contain letters'),
  email: yup
    .string()
    .required('Is required')
    .email('Is not valid email')
    .test(
      'emailAvailableTest',
      'Email is taken. Choose another',
      (_, { parent: {emailChecked, emailAvailable}}) => {
        if(!emailChecked) return true;
        return emailAvailable;
      },
    ),
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
    .required('Is required'),
  emailChecked: yup 
    .boolean()
    .required('Is required')
    .oneOf([true], 'Email must be checked'),
  emailAvailable: yup
    .boolean()
    .required('Is required')
    .oneOf([true], 'Email must be available'),
});


const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  repeatPassword: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur, setFieldValue, setValues
  } = useFormik({
    initialValues,
    validationSchema
  });

  const handleEmailChange = (e) => {
    if(values.emailChecked){
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false
      }, true);
    }else{
      handleChange(e);
    }
  }

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if(!errors.email){
      setIsLoading(true);
      (async() => {
        const emailAvailable = await apiService.checkEmail(values.email);
        setFieldValue('emailChecked', true);
        setFieldValue('emailAvailable', emailAvailable);
        setIsLoading(false);
      })();
    }
  }

  const emailEndAdornment = isLoading
    ? <InputAdornment position="end"><CircularProgress size={24}/></InputAdornment>
    : values.emailChecked
      ? values.emailAvailable
        ? <InputAdornment position="end"><CheckCircleIcon color="success" /></InputAdornment>
        : <InputAdornment position="end"><ErrorIcon color="error" /></InputAdornment>
      : undefined;

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
          isValid={dirty && isValid}
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
                  onBlur={handleBlur}
                  value={values.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
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
                  onBlur={handleBlur}
                  value={values.surname}
                  error={touched.surname && Boolean(errors.surname)}
                  helperText={touched.surname && errors.surname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="El. paštas"
                  InputProps={{
                    endAdornment: emailEndAdornment
                  }}
                   // Props provided by Formik
                  name="email"
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
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
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
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
                  onBlur={handleBlur}
                  value={values.repeatPassword}
                  error={touched.repeatPassword && Boolean(errors.repeatPassword)}
                  helperText={touched.repeatPassword && errors.repeatPassword}
                />
              </Grid>
              <Grid item sx={{ mb: 2 }} xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      color="primary"
                       // Props provided by Formik
                      name="subscribed"
                      onChange={handleChange}
                      checked={values.subscribed}
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
