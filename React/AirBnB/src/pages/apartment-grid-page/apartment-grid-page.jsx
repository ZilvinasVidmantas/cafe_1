import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ApartmentGridHeader from './apartment-grid-page-header/apartment-grid-page-header';
import AprtmentGridPageGrid from './apartment-grid-page-grid';
import AparmentGridPageCard from './apartment-grid-page-card';
import APIService from '../../services/api-service';

const emptyApartments = [...new Array(20)].map((_, id) => ({ id }));
const ApartmentGridPage = () => {
  const [apartments, setApartments] = useState(emptyApartments);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchedApartments = await APIService.fetchJoinedApartments();
      setApartments(fetchedApartments);
      setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <ApartmentGridHeader />
      <AprtmentGridPageGrid>
        {apartments.map((apartment) => (
          <AparmentGridPageCard
            key={apartment.id}
            loading={loading}
            {...apartment}
          />
        ))}
      </AprtmentGridPageGrid>
    </Box>
  );
};

export default ApartmentGridPage;
