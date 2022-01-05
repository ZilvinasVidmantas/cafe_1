import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';

// TODO: export helper function
const isNumeric = (val) => /^-?\d+$/.test(val);

// TODO: formik validation
const validate = ({ name, age }) => {
  const errors = {};
  let noErrors = true;
  if (name === '') {
    errors.name = 'Privalo būti užpildytas';
    noErrors = false;
  }
  if (age === '') {
    errors.age = 'Privalo būti užpildytas';
    noErrors = false;
  }
  if (!isNumeric(age)) {
    const errMessage = 'Privalo būti skaičius';
    if (errors.age) errors.age = [errors.age, errMessage];
    else errors.age = errMessage;
    noErrors = false;
  }
  return noErrors ? null : errors;
};

const formatErrorJSX = (error) => {
  if (error instanceof Array) {
    return (
      <>
        { error.map((x) => <Box key={x} component="span" sx={{ display: 'block' }}>{x}</Box>)}
      </>
    );
  }
  return error;
};

const UserPanelPageFormAdd = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate({ name, age });
    if (!newErrors) {
      dispatch({
        type: 'ADD_USER',
        payload: {
          name,
          age: Number(age),
        },
      });
      setName('');
      setAge('');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography element="h2" variant="h6" sx={{ my: 1 }}>Add User</Typography>
      <Box sx={{
        display: 'flex', gap: 1, pb: 2, alignItems: 'start',
      }}
      >
        <TextField
          error={Boolean(errors?.name)}
          helperText={formatErrorJSX(errors?.name)}
          id="name"
          label="Name"
          variant="filled"
          size="small"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors) {
              const { name: _, ...otherErrors } = errors;
              setErrors(otherErrors);
            }
          }}
        />
        <TextField
          error={Boolean(errors?.age)}
          helperText={formatErrorJSX(errors?.age)}
          id="age"
          label="Age"
          variant="filled"
          size="small"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            if (errors) {
              const { age: _, ...otherErrors } = errors;
              setErrors(otherErrors);
            }
          }}
        />
        <Button variant="contained" type="submit" size="large">Add</Button>
      </Box>
    </Box>
  );
};

export default UserPanelPageFormAdd;
