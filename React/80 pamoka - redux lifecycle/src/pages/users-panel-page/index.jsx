import React from 'react';
import { useSelector } from 'react-redux';
import {
  List, Box, Paper, Typography, Divider,
} from '@mui/material';
import FormAdd from './users-panel-page-form-add';
import ListItem from './users-panel-page-list-item';

const UsersPanelPage = () => {
  const users = useSelector((state) => state.users);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ width: 400, p: 2 }} elevation={2}>
        <Typography element="h1" variant="h5">Users Manager</Typography>
        <Divider />
        <FormAdd />
        <Divider />
        <List>
          {users.map(({ id, name, age }) => <ListItem key={id} id={id} name={name} age={age} />)}
        </List>
      </Paper>
    </Box>
  );
};

export default UsersPanelPage;
