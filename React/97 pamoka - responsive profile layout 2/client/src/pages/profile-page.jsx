import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  styled,
  Divider,
  TextField,
  Button,
  Fab,
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import { selectAuth } from '../store/auth';

// eslint-disable-next-line no-unused-vars
const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'cover',
  borderRadius: '50%',
}));

const calcOffset = (image, imgIcon) => {
  const radius = image.offsetWidth / 2;
  const imageDimension = imgIcon.offsetWidth;
  return radius * (1 - 1 / (2 ** (1 / 2))) - imageDimension / 2.3;
};

const ProfilePage = () => {
  const imageRef = useRef(null);
  const imgIconRef = useRef(null);
  const {
    user: {
      name,
      surname,
      email,
      imgSrc,
    },
  } = useSelector(selectAuth);

  const handleChangePhoto = () => console.log('Nuotraukos įkėlimas');

  useEffect(() => {
    const adjustImgIconOffset = () => {
      const offset = calcOffset(imageRef.current, imgIconRef.current);
      const imgIcon = imgIconRef.current;

      imgIcon.style.bottom = `${offset}px`;
      imgIcon.style.right = `${offset}px`;
    };
    adjustImgIconOffset();

    window.addEventListener('resize', adjustImgIconOffset);

    return () => {
      window.removeEventListener('resize', adjustImgIconOffset);
    };
  }, []);

  return (
    <Box>
      <Box sx={{
        position: 'relative',
        display: 'block',
        height: '65vw',
        width: '65vw',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      >
        <Img src={imgSrc ?? '/no-image-person.jpg'} alt="user image" ref={imageRef} />
        <Fab
          color="primary"
          size="small"
          ref={imgIconRef}
          onClick={handleChangePhoto}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
          }}
        >
          <AddAPhotoIcon fontSize="small" />
        </Fab>
      </Box>

      <Divider sx={{ pt: 1, pb: 2 }} textAlign="left">Profilio informacija</Divider>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Vardas" size="small" value={name} disabled />
        <TextField label="Pavardė" size="small" value={surname} disabled />
        <TextField label="Paštas" size="small" value={email} disabled />
        <TextField label="Slaptažodis" size="small" disabled />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Button variant="contained" color="primary">Redaguoti</Button>
      </Box>

    </Box>
  );
};

export default ProfilePage;
