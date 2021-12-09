import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import ApartmentImage from './ApartmentImage';

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

export default ApartmentImageCarousel;