import React from 'react';
import {
  Typography,
  Paper,
  Box,
  styled,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Image = styled('img')({
  height: 200,
  width: '100%',
  objectFit: 'cover',
});

const HomePageProductsCard = () => {
  const navigate = () => {
    console.log('Naviguojama');
  };

  const addToCart = (event) => {
    event.stopPropagation();
    console.log('Pridedma į Krepšelį');
  };

  const HeartIcon = Math.random() > 0.5 ? FavoriteIcon : FavoriteBorderIcon;

  return (
    <Paper
      sx={(theme) => ({
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        cursor: 'pointer',
        ':hover': {
          boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`,
        },
      })}
      onClick={navigate}
    >
      <HeartIcon
        className="favorite"
        color="secondary"
        sx={{ position: 'absolute', top: 4, right: 4 }}
      />
      <Image src={`https://unsplash.it/200/${200 + Math.floor(Math.random() * 20)}`} />
      <Box sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1, alignItems: 'center',
        }}
        >
          <Typography
            color="secondary"
            variant="h6"
          >
            249.49 €
          </Typography>
          <Button variant="contained" size="small" color="secondary" onClick={addToCart}>
            <ShoppingCartIcon fontSize="small" />
          </Button>
        </Box>
        <Box sx={{ fontSize: 15, display: 'flex', gap: 1 }}>
          <Box>
            <Typography>Type:</Typography>
            <Typography>Size:</Typography>
            <Typography>Brand:</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700 }}>Wide Screen</Typography>
            <Typography sx={{ fontWeight: 700 }}>24</Typography>
            <Typography sx={{ fontWeight: 700 }}>LOC</Typography>
          </Box>
        </Box>

      </Box>
    </Paper>
  );
};

export default HomePageProductsCard;
