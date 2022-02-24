import React from 'react';
import {
  Paper,
  TextField,
  Button,
} from '@mui/material';

const CollectionPanelPageForm = () => (
  <Paper sx={{ display: 'flex' }}>
    <TextField
      label="title"
      size="small"
      sx={{ flexGrow: 1 }}
    />
    <Button variant="contained" color="primary">Add</Button>
  </Paper>
);

export default CollectionPanelPageForm;
