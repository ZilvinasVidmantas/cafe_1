import { Box } from '@mui/material';
import ApartmentGridHeaderTypeContainer from './ApartmentGridHeaderTypeContainer';
import ApartmentGridHeaderFilterContainer from './ApartmentGridHeaderFilterContainer';

const ApartmentGridHeader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3.5, mb: 0, fontSize: 10 }} >
      <ApartmentGridHeaderTypeContainer />
      <ApartmentGridHeaderFilterContainer />
    </Box >
  );
};

export default ApartmentGridHeader;