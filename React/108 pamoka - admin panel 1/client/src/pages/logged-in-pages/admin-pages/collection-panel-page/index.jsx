import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CollectionPanelPageGrid from './collection-panel-page-grid';
import CollectionPanelPageForm from './collection-panel-page-form';
import { collectionSelector } from '../../../../store/collections';

const CollectionPanelPage = () => {
  const { state: { id } } = useLocation();
  const { title, data } = useSelector(collectionSelector(id));
  const navigate = useNavigate();

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
      <Box sx={{
        width: 400, display: 'flex', flexDirection: 'column', gap: 2,
      }}
      >
        <CollectionPanelPageForm collectionId={id} />
        <CollectionPanelPageGrid data={data} />
      </Box>
    </Box>
  );
};

export default CollectionPanelPage;
