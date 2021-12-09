import React from 'react';
import { Box, Typography, Button, Fab } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import { addDays, formatDateRange } from "../helpers/dateHelpers";
import Carousel from 'react-material-ui-carousel';
import HouseIcon from '@mui/icons-material/House';
import CapsuleButton from '../components/buttons/CapsuleButton';

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
  borderRadius: 12,
  overflow: 'hidden',
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

const ApartmentImageCarousel = ({ images }) => {
  const theme = useTheme();

  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      IndicatorIcon={<span />}
      strictIndexing={true}
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          bottom: 10,
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


const ApartmentButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'none',
  textTransform: 'none',
  color: theme.palette.text.secondary,
  ':hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const ApartmentGridHeader = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >


      <Box sx={{ display: 'flex', mt: 4, mb: 2 }}>
        <Box sx={{ pb: 1, borderBottom: 1 }}>
          <ApartmentButton>
            <HouseIcon sx={{ verticalAlign: 'bottom', mr: 0.5 }} />
            <Typography sx={{ verticalAlign: 'bottom' }} color="text.primary">Nuosavi namai</Typography>
          </ApartmentButton>
        </Box>
        <Box sx={{ pb: 1 }}>
          <ApartmentButton>
            <Typography sx={{ verticalAlign: 'bottom' }} color="text.secondary">Butai</Typography>
          </ApartmentButton>

        </Box>
        <Box sx={{ pb: 1 }}>
          <ApartmentButton>
            <Typography sx={{ verticalAlign: 'bottom' }} color="text.secondary">Kotedžai</Typography>
          </ApartmentButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Fab variant="extended">Bet kada</Fab>
        <Fab variant="extended">Svečiai</Fab>
        <Fab variant="extended">Filtrai</Fab>
      </Box>
    </Box >
  );
};



const ApartmentGridPage = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Box>
      <ApartmentGridHeader />
      <ApartmentGrid sx={{ my: 4 }}>
        {apartments.map(apartment => <ApartmentCard key={apartment.id} {...apartment} />)}
      </ApartmentGrid>
    </Box>
  );
};

export default ApartmentGridPage;

