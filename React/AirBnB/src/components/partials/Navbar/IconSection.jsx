import AirbnbIcon from '../../AirbnbIcon';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const IconSection = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <AirbnbIcon />
      </Link>
      <Link to="/search">Apartment Grid</Link>
      <Link to="/apartments">Apartment Grid</Link>
      <Link to="/location">Arpartments By Location</Link>
    </Box>
  );
};

export default IconSection;
