import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ApartmentGridHeader from './apartment-grid-page-header/apartment-grid-page-header';
import AprtmentGridPageGrid from './apartment-grid-page-grid';
import AparmentGridPageCard from './apartment-grid-page-card';
import { URLSearchParamsToObject } from '../../helpers/url-search-params-helpers';
import APIService from '../../services/api-service';

const ApartmentGridPage = () => {
  const [apartments, setApartments] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchParamsObj = URLSearchParamsToObject(searchParams);
    (async () => {
      const fetchedApartments = await APIService.fetchJoinedApartments(searchParamsObj);
      console.table(fetchedApartments);
      setApartments(fetchedApartments);
    })();
  }, [searchParams]);

  return (
    <Box>
      <ApartmentGridHeader />
      <AprtmentGridPageGrid>
        {apartments.map(({ ...apartment }) => (
          <AparmentGridPageCard
            key={apartment.id}
            {...apartment}
          />
        ))}
      </AprtmentGridPageGrid>
    </Box>
  );
};

export default ApartmentGridPage;
