import { styled } from '@mui/material/styles';

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

export default ApartmentImageContainer;