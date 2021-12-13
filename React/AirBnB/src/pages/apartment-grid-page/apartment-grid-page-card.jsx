import React from 'react';
import { Box, Typography } from '@mui/material';
import { formatDateRange } from '../../helpers/date-helpers';
import AparmentGridPageCarousel from './apartment-grid-page-carousel';

const AparmentGridPageCard = ({
  title, distance, images, openDateRange, price,
}) => (
  <Box>
    <AparmentGridPageCarousel images={images} />
    <Box sx={{ mt: 1 }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{
          fontWeight: 'bold', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
        }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 15 }}>
          &#36;
          {price}
          {' '}
          / už naktį
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: 14 }}>
          Už
          {' '}
          {distance}
          {' '}
          kilometrų
        </Typography>
        <Typography sx={{ fontSize: 14 }}>{formatDateRange(openDateRange)}</Typography>
      </Box>
    </Box>
  </Box>
);

export default AparmentGridPageCard;
