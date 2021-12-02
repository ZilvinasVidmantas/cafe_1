import AirbnbIcon from '../../AirbnbIcon';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const IconSection = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <AirbnbIcon />
      </Link>
      <Link to="/search">Search aparments</Link>
      <Link to="/apartment-location">Apartments by location</Link>
      <Link to="/apartment-grid">Apartment grid</Link>
    </Box>
  );
};

export default IconSection;
