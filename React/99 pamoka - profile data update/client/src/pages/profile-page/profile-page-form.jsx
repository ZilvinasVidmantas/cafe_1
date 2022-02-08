import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  TextField,
  Button,
  styled,
} from '@mui/material';

const Form = styled('form')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingRight: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    paddingRight: 0,
  },
}));

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'At least 2 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Is required'),
  surname: yup
    .string()
    .min(2, 'At least 2 symbols')
    .max(32, 'Maximum 32 symbols')
    .required('Is required'),
  email: yup
    .string()
    .email('Is not valid email')
    .required('Is required'),
});

const ProfilePageForm = ({ name, surname, email }) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
  } = useFormik({
    initialValues: {
      name,
      surname,
      email,
    },
    validationSchema,
  });

  return (
    <Form>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Vardas"
          size="small"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          label="Pavardė"
          size="small"
          name="surname"
          value={values.surname}
          onChange={handleChange}
          error={Boolean(errors.surname)}
          helperText={errors.surname}
        />
        <TextField
          label="Paštas"
          size="small"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          disabled={!dirty || !isValid}
        >
          Redaguoti
        </Button>
      </Box>
      <pre style={{ position: 'fixed', top: 150, right: 150 }}>
        { JSON.stringify({
          values,
          touched,
          errors,
          isValid,
          dirty,
        }, null, 2)}
      </pre>
    </Form>
  );
};

export default ProfilePageForm;
