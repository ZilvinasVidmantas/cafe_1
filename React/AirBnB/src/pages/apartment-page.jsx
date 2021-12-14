import React from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const ApartmentPage = () => {
  const { id } = useParams();
  return (
    <Box>
      <Typography component="h1" variant="h1">{id}</Typography>
    </Box>
  );
};

export default ApartmentPage;
