import React from 'react';
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

const ProfilePageForm = ({ name, surname, email }) => (
  <Form>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField label="Vardas" size="small" value={name} disabled />
      <TextField label="Pavardė" size="small" value={surname} disabled />
      <TextField label="Paštas" size="small" value={email} disabled />
      <TextField label="Slaptažodis" size="small" disabled />
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
      <Button variant="contained" color="primary">Redaguoti</Button>
    </Box>
  </Form>
);

export default ProfilePageForm;
