import React from 'react';
import {
  ListItem, ListItemText, IconButton,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import { deleteUser } from '../../store/users';

const UserPanelPageListItem = ({
  id, name, surname, email, onEdit, edited,
}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    const deleteUserAction = deleteUser({ id });
    dispatch(deleteUserAction);
  };

  return (
    <ListItem
      sx={{
        bgcolor: edited ? 'grey.200' : 'none',
      }}
      key={id}
      disableGutters
      secondaryAction={(
        <>
          <IconButton
            color="warning"
            onClick={() => onEdit({
              id, name, surname, email,
            })}
          >
            {
              edited
                ? <DoDisturbAltIcon />
                : <AutorenewIcon />
            }
          </IconButton>
          <IconButton color="error" onClick={handleDeleteItem}>
            <DeleteForeverIcon />
          </IconButton>
        </>
    )}
    >
      <ListItemText primary={`${email} - ${name} ${surname}`} />
    </ListItem>
  );
};

export default UserPanelPageListItem;
