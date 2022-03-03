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

const HomePageProductsCard = ({
  id, images, price, ...props
}) => {
  const navigate = () => {
    console.log('Naviguojama i atskirą produkto puslapį:', id);
  };

  const addToCart = (event) => {
    event.stopPropagation();
    console.log('Pridedma į Krepšelį productas su id', id);
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
      <Image src={images[0]} />
      <Box sx={{ p: 2 }}>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', gap: 1, mb: 1, alignItems: 'center',
        }}
        >
          <Typography
            color="secondary"
            variant="h6"
          >
            {price}
            {' '}
            €
          </Typography>
          <Button variant="contained" size="small" color="secondary" onClick={addToCart}>
            <ShoppingCartIcon fontSize="small" />
          </Button>
        </Box>
        <Box sx={{ fontSize: 15, display: 'flex', gap: 1 }}>
          <Box>
            {Object.keys(props).map((x) => (
              <Typography key={x}>{`${x}: `}</Typography>
            ))}
          </Box>
          <Box>
            {Object.values(props)
              .map((v, i) => ({ id: i, value: v }))
              .map((x) => (
                <Typography key={x.id} sx={{ fontWeight: 700 }}>{x.value}</Typography>
              ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default HomePageProductsCard;
