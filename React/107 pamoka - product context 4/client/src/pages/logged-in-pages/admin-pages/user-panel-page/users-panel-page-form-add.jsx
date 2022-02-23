import React from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';

const UserPanelPageFormAdd = ({
  title,
  btnText,
  color,
  formik,
}) => {
  const {
    values, errors, touched, isValid, dirty,
    handleChange, handleBlur, handleSubmit,
  } = formik;

  const buttonDisabled = !isValid || !dirty;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography element="h2" variant="h6" sx={{ my: 1 }}>{title}</Typography>
      <Box sx={{
        display: 'flex', gap: 1, pb: 2, alignItems: 'center', flexDirection: 'column',
      }}
      >
        <TextField
          id="name"
          label="Name"
          variant="filled"
          size="small"
          name="name"
          fullWidth
          // Props provided by Formik
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="surname"
          label="Surname"
          variant="filled"
          size="small"
          name="surname"
          fullWidth
          // Props provided by Formik
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.surname && Boolean(errors.surname)}
          helperText={touched.surname && errors.surname}
        />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          size="small"
          name="email"
          fullWidth
          // Props provided by Formik
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          color={color}
          disabled={buttonDisabled}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

export default UserPanelPageFormAdd;
