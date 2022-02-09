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

const Form = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: theme.spacing(4),
}));

const ProfilePageConfimationModal = ({ open, handleClose }) => (
  <Modal
    open={open}
    onClose={handleClose}
  >
    <Form component="form">
      <Typography align="center" variant="h5" paddingBottom={2}>Įveskite slaptažodį</Typography>
      <TextField label="Password" variant="outlined" fullWidth />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" type="submit">Submit</Button>
      </Box>
    </Form>
  </Modal>
);

export default ProfilePageConfimationModal;
