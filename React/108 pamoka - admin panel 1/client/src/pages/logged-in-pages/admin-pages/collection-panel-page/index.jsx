import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const CollectionPanelPage = () => {
  const {
    state: {
      id,
      title,
      data,
    },
    ...rest
  } = useLocation();

  const navigate = useNavigate();
  console.log(id);
  console.log(rest);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Typography
        element="h1"
        variant="h2"
        sx={{ textTransform: 'capitalize', mb: 3 }}
      >
        {title}

      </Typography>
      <pre>
        {JSON.stringify(data, null, 4)}
      </pre>
    </Box>
  );
};

export default CollectionPanelPage;
