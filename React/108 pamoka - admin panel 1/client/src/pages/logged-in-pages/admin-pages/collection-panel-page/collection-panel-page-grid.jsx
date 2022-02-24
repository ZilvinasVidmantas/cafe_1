import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const CollectionPanelPageGrid = ({ data }) => (

  <Paper sx={{ width: '100%' }}>
    <Grid
      container
      sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', height: 40 }}
    >
      <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ ml: 1 }}>ID</Typography>
      </Grid>
      <Grid item xs={7} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>Title</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 2,
        }}
      >
        <Typography>Actions</Typography>
      </Grid>
    </Grid>
    {
      data.map(({ id, title }, i) => (
        <Grid
          key={id}
          container
          sx={{ bgcolor: i % 2 === 1 ? 'grey.100' : 'none' }}

        >
          <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ ml: 1 }}>{id}</Typography>
          </Grid>
          <Grid item xs={7} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 1,
            }}
          >
            <IconButton color="secondary" onClick={() => console.log('update', id)}>
              <UpgradeIcon />
            </IconButton>
            <IconButton color="error" onClick={() => console.log('delete', id)}>
              <DeleteForeverIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))
    }
  </Paper>
);

export default CollectionPanelPageGrid;
