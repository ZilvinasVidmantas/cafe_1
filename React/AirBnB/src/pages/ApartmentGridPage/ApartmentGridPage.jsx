import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from "react-router-dom";
import { addDays } from "../../helpers/dateHelpers";
import ApartmentGridHeader from './ApartmentGridHeader/ApartmentGridHeader';
import ApartmentGrid from './ApartmentGrid';
import ApartmentCard from './ApartmentCard';

const random = (from, to) => from + Math.floor(Math.random() * (to - from))

const apartments = [];

for (let i = 1; i <= 60; i++) {
  const distance = random(100, 900);
  const imgSize = random(400, 410);
  const price = random(25, 200);
  const randomDaysFrom = random(1, 20);
  const dateFrom = addDays(new Date(), randomDaysFrom);
  const dateTo = addDays(new Date(), randomDaysFrom + 7);

  apartments.push({
    id: String(i),
    title: 'Pavadinimas' + i,
    images: [
      `https://random.imagecdn.app/${imgSize}/${imgSize}`,
      `https://random.imagecdn.app/${imgSize + 1}/${imgSize + 1}`,
      `https://random.imagecdn.app/${imgSize + 2}/${imgSize + 2}`,
      `https://random.imagecdn.app/${imgSize + 3}/${imgSize + 3}`,
    ],
    distance,
    openDateRange: [dateFrom, dateTo],
    liked: distance % 10 === 0 ? { message: 'Gera Troba' } : null,
    price
  })
}

const ApartmentGridPage = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Box>
      <ApartmentGridHeader />
      <ApartmentGrid>
        {apartments.map(apartment => <ApartmentCard key={apartment.id} {...apartment} />)}
      </ApartmentGrid>
    </Box>
  );
};

export default ApartmentGridPage;
