import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { collectionSelector, createItem } from '../../../../store/collections';

const CollectionPanelPage = () => {
  const { state: { id } } = useLocation();
  const { title, data } = useSelector(collectionSelector(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItem = (newTitle) => {
    dispatch(createItem({
      collectionId: id,
      title: newTitle,
    }));
  };

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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <CollectionPanelPageForm onSubmit={addItem} />
        <CollectionPanelPageGrid data={data} />
      </Box>
    </Box>
  );
};

export default CollectionPanelPage;
