import React, { useCallback } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDateRange } from '../../helpers/date-helpers';
import AparmentGridPageCarousel from './apartment-grid-page-carousel';
import SquareContainer from '../../components/square-container';

const AparmentGridPageCard = ({
  id, title, distance, images, openDateRange, price, loading,
}) => {
  const navigate = useNavigate();
  const navigateToSingleApartment = useCallback(
    () => navigate(`/apartment/${id}`),
    [id],
  );

  return (
    <Box sx={{ cursor: 'pointer' }}>
      {loading
        ? (
          <SquareContainer>
            <Skeleton variant="rectangular" height="100%" width="100%" />
          </SquareContainer>
        )
        : <AparmentGridPageCarousel images={images} onClick={navigateToSingleApartment} />}

      <Box sx={{ mt: 1 }} onClick={navigateToSingleApartment}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {loading
            ? <Skeleton variant="rectangular" width="60%" height={16} sx={{ mb: 2 }} />
            : (
              <Typography sx={{
                fontWeight: 'bold', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',
              }}
              >
                {title}
              </Typography>
            )}

          {loading
            ? <Skeleton variant="rectangular" width="30%" height={16} sx={{ mb: 2 }} />
            : (
              <Typography sx={{ fontSize: 15 }}>
                &#36;
                {price}
                {' '}
                / už naktį
              </Typography>
            )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {loading
            ? <Skeleton variant="rectangular" width="30%" height={16} />
            : (
              <Typography sx={{ fontSize: 14 }}>
                Už
                {' '}
                {distance}
                {' '}
                kilometrų
              </Typography>
            )}

          {loading
            ? <Skeleton variant="rectangular" width="25%" height={16} />
            : <Typography sx={{ fontSize: 14 }}>{formatDateRange(openDateRange)}</Typography>}

        </Box>
      </Box>
    </Box>
  );
};

export default AparmentGridPageCard;
