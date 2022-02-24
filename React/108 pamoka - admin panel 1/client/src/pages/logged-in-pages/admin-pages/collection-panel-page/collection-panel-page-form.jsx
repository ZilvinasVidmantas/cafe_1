import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
} from '@mui/material';

const CollectionPanelPageForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '') {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <Paper component="form" sx={{ display: 'flex' }} onSubmit={handleSubmit}>
      <TextField
        label="title"
        size="small"
        sx={{ flexGrow: 1 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">Add</Button>
    </Paper>
  );
};

export default CollectionPanelPageForm;
