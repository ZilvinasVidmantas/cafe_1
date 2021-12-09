import { Box, Typography } from '@mui/material';
import { formatDateRange } from "../../helpers/dateHelpers";
import ApartmentImageCarousel from './ApartmentImageCarousel';

const ApartmentCard = ({ id, title, distance, images, liked, openDateRange, price }) => (
  <Box>
    <ApartmentImageCarousel images={images} />
    <Box sx={{ mt: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontWeight: 'bold', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{title}</Typography>
        <Typography sx={{ fontSize: 15 }}>&#36;{price} / už naktį</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: 14 }}>Už {distance} kilometrų</Typography>
        <Typography sx={{ fontSize: 14 }}>{formatDateRange(openDateRange)}</Typography>
      </Box>
    </Box>
  </Box>
);

export default ApartmentCard;