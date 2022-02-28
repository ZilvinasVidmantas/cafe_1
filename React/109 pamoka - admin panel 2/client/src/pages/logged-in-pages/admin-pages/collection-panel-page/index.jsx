import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CollectionPanelPageGrid from './collection-panel-page-grid';
import CollectionPanelPageForm from './collection-panel-page-form';
import {
  collectionSelector,
  fetchCollection,
  createCollectionItem,
  deleteCollectionItem,
} from '../../../../store/collections';

const CollectionPanelPage = () => {
  const [editedItemId, setEditedItemId] = useState(null);
  const { state: { id } } = useLocation();
  const { data, title } = useSelector(collectionSelector(id)) ?? {};
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItem = (newTitle) => {
    dispatch(createCollectionItem({
      collectionId: id,
      title: newTitle,
    }));
  };

  const deleteItem = (itemId) => {
    dispatch(deleteCollectionItem({
      collectionId: id,
      itemId,
    }));
  };

  const editItem = (itemId) => {
    if (itemId === editedItemId) {
      setEditedItemId(null);
    } else {
      setEditedItemId(itemId);
    }
  };

  useEffect(() => {
    dispatch(fetchCollection(id));
  }, [id]);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      {(!title || !data)
        ? (
          <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={100} />
          </Box>
        )
        : (
          <>
            <Typography
              element="h1"
              variant="h2"
              sx={{ textTransform: 'capitalize', mb: 3 }}
            >
              {title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <CollectionPanelPageForm onSubmit={addItem} />
              <CollectionPanelPageGrid
                data={data.map((x) => ({ ...x, edited: x.id === editedItemId }))}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            </Box>
          </>
        )}
    </Box>
  );
};

export default CollectionPanelPage;
