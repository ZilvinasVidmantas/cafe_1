import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDateRange } from '../../helpers/date-helpers';
import AparmentGridPageCarousel from './apartment-grid-page-carousel';

const AparmentGridPageCard = ({
  id, title, distance, images, openDateRange, price,
}) => {
  const navigate = useNavigate();

  const navigateToSingleApartment = useCallback(
    () => navigate(`/apartment/${id}`),
    [id],
  );

  return (
    <Box sx={{ cursor: 'pointer' }}>
      <AparmentGridPageCarousel images={images} onClick={navigateToSingleApartment} />

      <Box sx={{ mt: 1 }} onClick={navigateToSingleApartment}>
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
};

export default AparmentGridPageCard;
