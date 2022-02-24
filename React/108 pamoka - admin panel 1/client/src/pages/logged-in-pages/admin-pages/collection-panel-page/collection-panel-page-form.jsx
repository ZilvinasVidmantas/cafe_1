import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
} from '@mui/material';

const CollectionPanelPageForm = () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    if (title !== '') {
      setTitle('');
    }
  };

  return (
    <Paper element="form" sx={{ display: 'flex' }} onSubmit={onSubmit}>
      <TextField
        label="title"
        size="small"
        sx={{ flexGrow: 1 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" color="primary">Add</Button>
    </Paper>
  );
};

export default CollectionPanelPageForm;
