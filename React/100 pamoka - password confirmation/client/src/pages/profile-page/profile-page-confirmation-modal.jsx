import React, { useRef } from 'react';
import {
  Paper,
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import UserService from '../../services/user-service';

const Form = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: theme.spacing(3),
}));

const ProfilePageConfimationModal = ({ open, handleClose, formData }) => {
  const passwordInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordInputRef.current.value;
    const result = await UserService.updateProfile({
      ...formData,
      password,
    });
    if (result) {
      handleClose();
    } else {
      // KLAIDOS RODYMAS
      // Parašykite po slaptažodžio lauku, klaidą
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Form
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
        onSubmit={handleSubmit}
      >
        <LockIcon fontSize="large" color="primary" />
        <Typography variant="h5">Įveskite slaptažodį</Typography>
        <TextField
          type="password"
          label="Slaptažodis"
          variant="outlined"
          inputRef={passwordInputRef}
          fullWidth
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" type="submit" size="large">Submit</Button>
        </Box>
      </Form>
    </Modal>
  );
};

export default ProfilePageConfimationModal;
