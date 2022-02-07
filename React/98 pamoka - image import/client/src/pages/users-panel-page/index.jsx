import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List, Box, Paper, Typography, Divider,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormAdd from './users-panel-page-form-add';
import ListItem from './users-panel-page-list-item';
import { selectUsers, addUser, updateUser } from '../../store/users';
import adminService from '../../services/admin-service';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Is Required')
    .min(4, 'Min 4 letters')
    .max(16, 'Max 4 letters'),
  surname: yup
    .string()
    .required('Is Required')
    .min(4, 'Min 4 letters')
    .max(16, 'Max 4 letters'),
  email: yup
    .string()
    .required('Is Required')
    .email('Is not email'),
});

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

let initialValues = {
  name: '',
  surname: '',
  email: '',
};

const UsersPanelPage = () => {
  const [editedUserId, setEditedUserId] = useState(null);
  const [formType, setFormType] = useState('add');
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleAddUser = ({ name, surname, email }) => {
    const addUserAction = addUser({ name, surname, email });
    dispatch(addUserAction);
  };

  const handleUpdateUser = ({ name, surname, email }) => {
    const updateUserAction = updateUser({
      id: editedUserId,
      name,
      surname,
      email,
    });
    dispatch(updateUserAction);
  };

  const onSubmit = (values) => {
    if (editedUserId) {
      handleUpdateUser(values);
      setEditedUserId(null);
      setFormType('add');
    } else {
      handleAddUser(values);
    }
    // eslint-disable-next-line no-use-before-define
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true, // Ar stebėti initialValues pasikeitimą
  });

  const editUser = ({
    id, name, surname, email,
  }) => {
    if (id === editedUserId) {
      setEditedUserId(null);
      setFormType('add');
      initialValues = {
        name: '',
        surname: '',
        email: '',
      };
      formik.setValues(initialValues);
    } else {
      setEditedUserId(id);
      setFormType('update');
      initialValues = {
        name,
        surname,
        email,
      };
      formik.setValues(initialValues);
    }
  };

  useEffect(() => {
    adminService.getUsers();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ width: 500, p: 2 }} elevation={2}>
        <Typography element="h1" variant="h5">Users Manager</Typography>
        <Divider />
        <FormAdd
          {...formData[formType]}
          formik={formik}
        />
        <Divider />
        <List>
          {users.map(({
            id, name, surname, email,
          }) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              surname={surname}
              email={email}
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
