import React from 'react';
import {
  Typography,
  Paper,
  Box,
  styled,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Image = styled('img')({
  height: 150,
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

  return (
    <Paper
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        ':hover': {
          boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`,
        },
      })}
      onClick={navigate}
    >
      <Image src="https://unsplash.it/200/200" />
      <Box sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1,
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
