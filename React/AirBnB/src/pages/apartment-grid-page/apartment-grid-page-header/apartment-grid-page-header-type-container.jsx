import * as React from 'react';
import { Box } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import Typography from '@mui/material/Typography';
import HoverableSquareButton from '../../../components/buttons/hoverable-square-button';

const ApartmentGridPageHeaderTypeContainer = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ pb: 1, borderBottom: 1 }}>
      <HoverableSquareButton>
        <HouseIcon sx={{ mr: 0.5 }} />
        <Typography color="text.primary" sx={{ fontWeight: 600 }}>Nuosavi namai</Typography>
      </HoverableSquareButton>
    </Box>
    <Box sx={{ pb: 1 }}>
      <HoverableSquareButton>
        <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Butai</Typography>
      </HoverableSquareButton>

    </Box>
    <Box sx={{ pb: 1 }}>
      <HoverableSquareButton>
        <Typography color="text.secondary" sx={{ fontWeight: 600 }}>Kotedžai</Typography>
      </HoverableSquareButton>
    </Box>
  </Box>
);

export default ApartmentGridPageHeaderTypeContainer;
