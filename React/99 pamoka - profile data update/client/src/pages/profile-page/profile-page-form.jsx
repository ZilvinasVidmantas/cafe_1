import React from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';

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

const ProfilePageForm = ({ name, surname, email }) => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
  } = useFormik({
    initialValues: {
      name,
      surname,
      email,
    },
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
        />
        <TextField
          label="Pavardė"
          size="small"
          name="surname"
          value={values.surname}
          onChange={handleChange}
        />
        <TextField
          label="Paštas"
          size="small"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Button variant="contained" color="primary" disabled={!dirty}>Redaguoti</Button>
      </Box>
      <pre style={{ position: 'fixed', top: 150, right: 150 }}>
        { JSON.stringify({
          values,
          touched,
          errors,
        }, null, 2)}
      </pre>
    </Form>
  );
};

export default ProfilePageForm;
