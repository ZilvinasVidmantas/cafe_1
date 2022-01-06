import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List, Box, Paper, Typography, Divider,
} from '@mui/material';
import FormAdd from './users-panel-page-form-add';
import ListItem from './users-panel-page-list-item';
import { createAddUserAction, createUpdateUserAction } from '../../store/action-creators';
import { selectUsers } from '../../store/selectors';

const formData = {
  add: {
    title: 'Add User',
    btnText: 'Add',
    color: 'primary',
  },
  update: {
    title: 'Update User',
    btnText: 'Update',
    color: 'warning',
  },
};

const UsersPanelPage = () => {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [editedUserId, setEditedUserId] = useState(null);
  const [formType, setFormType] = useState('add');
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const reset = () => {
    setEditedUserId(null);
    setFormType('add');
    setNameInput('');
    setAgeInput('');
  };

  const editUser = ({ id, name, age }) => {
    if (id === editedUserId) {
      reset();
    } else {
      setEditedUserId(id);
      setFormType('update');
      setNameInput(name);
      setAgeInput(age);
    }
  };

  const addUser = ({ name, age }) => {
    const addUserAction = createAddUserAction({ name, age });
    dispatch(addUserAction);
  };

  const updateUser = ({ name, age }) => {
    const updateUserAction = createUpdateUserAction({
      id: editedUserId,
      name,
      age,
    });
    dispatch(updateUserAction);
    reset();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ width: 500, p: 2 }} elevation={2}>
        <Typography element="h1" variant="h5">Users Manager</Typography>
        <Divider />
        <FormAdd
          {...formData[formType]}
          name={nameInput}
          age={ageInput}
          setName={setNameInput}
          setAge={setAgeInput}
          onSubmit={formType === 'add' ? addUser : updateUser}
        />
        <Divider />
        <List>
          {users.map(({ id, name, age }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              age={age}
              onEdit={editUser}
              edited={id === editedUserId}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default UsersPanelPage;

// 10 pertraukėlė
// 15 įsigilinimas
// 19:25 tęsiame
