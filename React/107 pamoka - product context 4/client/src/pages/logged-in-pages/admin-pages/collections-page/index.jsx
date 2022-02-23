import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import CollectionService from './services/collections-service';
import CollectionsPageCollection from './collections-page-collection';

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCollections = await CollectionService.getUsers();
      setCollections(fetchedCollections);
    })();
  }, []);

  return (
    <Box>
      <Typography component="h1" variant="h2">Collections</Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {
          collections.map((props) => (
            <Grid
              key={props.id}
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
            >
              <CollectionsPageCollection {...props} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};

export default CollectionsPage;
