import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { addDays } from "../helpers/dateHelpers";
import Carousel from 'react-material-ui-carousel';

const random = (from, to) => from + Math.floor(Math.random() * (to - from))

const apartments = [];

for (let i = 1; i <= 60; i++) {
  const distance = random(100, 900);
  const imgSize = random(400, 600);
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

const ApartmentGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',

  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

const ApartmentImageContainer = styled('div')({
  position: 'relative',
  ':before': {
    content: '" "',
    display: 'block',
    width: '100%',
    paddingTop: '100%',
  },
  '>img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
});

const ApartmentImage = ({ alt, ...props }) => {
  return <ApartmentImageContainer><img {...props} alt={props.alt ?? 'Mes nenaudojam SEO'} /></ApartmentImageContainer>;
};

const ApartmentImageCarousel = (props) => {
  const theme = useTheme();
  console.log(theme.palette.primary.main);

  const images = apartments[0].images;

  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      IndicatorIcon={<span />}
      strictIndexing={true}
      indicatorContainerProps={{
        style: {
          position: 'relative',
          bottom: '50px',
          zIndex: 5
        }
      }}
      indicatorIconButtonProps={{
        style: {
          height: 12,
          width: 12,
          margin: 3,
          backgroundColor: '#fffb',
        }
      }}

      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: theme.palette.primary.main,
        }
      }}
    >
      {
        images.map((image, i) => <ApartmentImage
          key={i}
          src={image}
        />)
      }
    </Carousel>
  )
};


const ApartmentGridPage = () => {
  const location = useLocation();

  return (
    <ApartmentGrid>
      <Box>
        <ApartmentImageCarousel />
      </Box>
    </ApartmentGrid>
  );
};

export default ApartmentGridPage;

/*
  Sukurkite Kortelių Grid'ą
  pertrauka 10min
  Kortelė:
    // * Basic grid - 20:10
    // * Viena uotrauka 20:25
    // * pertauka 21:00
    * Nuotraukų slider'is 21:10
      * https://www.npmjs.com/package/react-material-ui-carousel
      *
    * Datos formatas rytoj
    * like'o formatas rytoj
    * Likęs stilizavimas rytoj
*/
