import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List, Box, Paper, Typography, Divider,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormAdd from './users-panel-page-form-add';
import ListItem from './users-panel-page-list-item';
import { selectUsers, addUser, updateUser } from '../../store/users';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Is Required')
    .min(4, 'Min 4 letters')
    .max(16, 'Max 4 letters'),
  age: yup
    .number('Must be numeric')
    .integer('Must be integed')
    .required('Is required')
    .positive('Must be positive'),
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
  age: '',
};

const UsersPanelPage = () => {
  const [editedUserId, setEditedUserId] = useState(null);
  const [formType, setFormType] = useState('add');
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleAddUser = ({ name, age }) => {
    const addUserAction = addUser({ name, age });
    dispatch(addUserAction);
  };

  const handleUpdateUser = ({ name, age }) => {
    const updateUserAction = updateUser({
      id: editedUserId,
      name,
      age,
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

  const editUser = ({ id, name, age }) => {
    if (id === editedUserId) {
      setEditedUserId(null);
      setFormType('add');
      initialValues = {
        name: '',
        age: '',
      };
      formik.setValues(initialValues);
    } else {
      setEditedUserId(id);
      setFormType('update');
      initialValues = {
        name,
        age,
      };
      formik.setValues(initialValues);
    }
  };

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
      <pre>
        {JSON.stringify({
          values: formik.values,
          errors: formik.errors,
          touched: formik.touched,
          dirty: formik.dirty,
          isValid: formik.isValid,
        }, null, 4)}
      </pre>
    </Box>
  );
};

export default UsersPanelPage;
