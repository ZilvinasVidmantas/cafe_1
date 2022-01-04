import React from 'react';
import { useSelector } from 'react-redux';
import {
  List, ListItem, ListItemText, Box, IconButton, Paper, Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// 20:15
const UsersPanelPage = () => {
  const users = useSelector((state) => state.users);

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
                <IconButton color="error">
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
