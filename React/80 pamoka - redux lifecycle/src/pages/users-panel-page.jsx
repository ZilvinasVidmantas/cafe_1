import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List, ListItem, ListItemText, Box, IconButton, Paper, Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UsersPanelPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'DELETE_USER',
      payload: { id },
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ width: 400, p: 2 }} elevation={2}>
        <Typography element="h1" variant="h5">All Users</Typography>
        <List>
          {users.map(({ id, name, age }) => (
            <ListItem
              key={id}
              disableGutters
              secondaryAction={(
                <IconButton color="error" onClick={() => handleDeleteItem(id)}>
                  <DeleteForeverIcon />
                </IconButton>
              )}
            >
              <ListItemText primary={`${name} - ${age}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default UsersPanelPage;
