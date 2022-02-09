import React from 'react';
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

const Form = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: theme.spacing(3),
}));

const ProfilePageConfimationModal = ({ open, handleClose }) => (
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
    >
      <LockIcon fontSize="large" color="primary" />
      <Typography variant="h5">Įveskite slaptažodį</Typography>
      <TextField
        type="password"
        label="Slaptažodis"
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" type="submit" size="large">Submit</Button>
      </Box>
    </Form>
  </Modal>
);

export default ProfilePageConfimationModal;
