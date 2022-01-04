import React from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';

const UserPanelPageFormAdd = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Su naujais metai');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography element="h2" variant="h6" sx={{ my: 1 }}>Add User</Typography>
      <Box sx={{ display: 'flex', gap: 1, pb: 2 }}>
        <TextField id="name" label="Name" variant="filled" size="small" />
        <TextField id="age" label="Age" variant="filled" size="small" />
        <Button variant="contained" type="submit">Add</Button>
      </Box>
    </Box>
  );
};

export default UserPanelPageFormAdd;
