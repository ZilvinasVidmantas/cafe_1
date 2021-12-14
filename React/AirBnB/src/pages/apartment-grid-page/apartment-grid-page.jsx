import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ApartmentGridHeader from './apartment-grid-page-header/apartment-grid-page-header';
import AprtmentGridPageGrid from './apartment-grid-page-grid';
import AparmentGridPageCard from './apartment-grid-page-card';
import ApartmentContext from '../../contexts/apartment-context';

const ApartmentGridPage = () => {
  const { apartments } = useContext(ApartmentContext);
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();
  console.log(apartments);

  return (
    <Box>
      <ApartmentGridHeader />
      <AprtmentGridPageGrid>
        {apartments.map(({ city, country, ...apartment }) => (
          <AparmentGridPageCard
            key={apartment.id}
            {...apartment}
            title={`${city.title}, ${country.title}`}
          />
        ))}
      </AprtmentGridPageGrid>
    </Box>
  );
};

export default ApartmentGridPage;

// api-service.js faile suformuokite PAPILDOMĄ savybę title,
// jog to nereikėtų atlikinėti šiame komponente
