import React from 'react';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import ApartmentGridPageImage from './apartment-grid-page-image/apartment-grid-page-image';

const AparmentGridPageCarousel = ({ images, onClick }) => {
  const theme = useTheme();

  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      IndicatorIcon={<span />}
      strictIndexing
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          bottom: 10,
          zIndex: 5,
        },
      }}
      indicatorIconButtonProps={{
        style: {
          height: 12,
          width: 12,
          margin: 3,
          backgroundColor: '#fffb',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      {
        images.map((image) => (
          <ApartmentGridPageImage
            onClick={onClick}
            key={image}
            src={image}
          />
        ))
      }
    </Carousel>
  );
};

export default AparmentGridPageCarousel;
