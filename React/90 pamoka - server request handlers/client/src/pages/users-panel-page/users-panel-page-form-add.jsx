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
        display: 'flex', gap: 1, pb: 2, alignItems: 'start',
      }}
      >
        <TextField
          id="name"
          label="Name"
          variant="filled"
          size="small"
          name="name"
          // Props provided by Formik
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="age"
          label="Age"
          variant="filled"
          size="small"
          type="number"
          name="age"
          // Props provided by Formik
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.age && Boolean(errors.age)}
          helperText={touched.age && errors.age}
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
