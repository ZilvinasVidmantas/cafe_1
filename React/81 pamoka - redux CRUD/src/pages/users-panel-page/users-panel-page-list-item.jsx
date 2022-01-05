import React from 'react';
import {
  ListItem, ListItemText, IconButton,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UserPanelPageListItem = ({ id, name, age }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch({
      type: 'DELETE_USER',
      payload: { id },
    });
  };

  return (
    <ListItem
      key={id}
      disableGutters
      secondaryAction={(
        <IconButton color="error" onClick={handleDeleteItem}>
          <DeleteForeverIcon />
        </IconButton>
    )}
    >
      <ListItemText primary={`${name} - ${age}`} />
    </ListItem>
  );
};

export default UserPanelPageListItem;
