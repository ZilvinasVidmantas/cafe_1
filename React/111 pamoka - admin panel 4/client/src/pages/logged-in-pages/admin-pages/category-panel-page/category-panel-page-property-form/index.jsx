import React from 'react';
import {
  Typography,
  Box,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CategoryPanelPagePropertyFormConfiguration from './category-panel-page-property-form-configuration';

const CategoryPanelPagePropertyForm = () => (
  <Paper sx={{ p: 3, mt: 2 }}>
    <Typography sx={{ fontSize: 22, mb: 3 }}>
      Kategorijos savybių konfigūracija
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <CategoryPanelPagePropertyFormConfiguration />
      <CategoryPanelPagePropertyFormConfiguration />
      <CategoryPanelPagePropertyFormConfiguration />
      <CategoryPanelPagePropertyFormConfiguration />
      <CategoryPanelPagePropertyFormConfiguration />
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <IconButton size="large" color="secondary">
        <AddCircleIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
      >
        Atnaujinti savybes
      </Button>
    </Box>
  </Paper>
);

export default CategoryPanelPagePropertyForm;
