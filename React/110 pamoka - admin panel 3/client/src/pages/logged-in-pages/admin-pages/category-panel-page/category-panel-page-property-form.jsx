import React from 'react';
import {
  Typography,
  Box,
  Paper,
} from '@mui/material';

const CategoryPanelPagePropertyForm = () => (
  <Paper sx={{ flexGrow: 1, p: 3, mt: 2 }}>
    <Typography sx={{ fontSize: 22, mb: 3 }}>
      Kategorijos savybių konfigūracija
    </Typography>
    <Box>
      <ul>
        <li>Įgalinti pagrindinės formos Fullstack veikimą</li>
        <li>
          Sukurti savybių formos konfigūracijos veikimą
          <ul>
            <li>darbas 1</li>
            <li>darbas 2</li>
            <li>darbas 3</li>
          </ul>
        </li>
      </ul>
      Kategorijai kuriamos savybės, kurios gali būti susietos su kolekcijomis.
      Susiejus savybes su kolekcijomis, automatiškai pritaikomi filtrai.
    </Box>
  </Paper>
);

export default CategoryPanelPagePropertyForm;
