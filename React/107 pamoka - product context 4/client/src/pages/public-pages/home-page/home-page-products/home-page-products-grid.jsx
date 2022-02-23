import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Card from './home-page-products-card';
import { ProductContext } from '../contexts/product-context';

const HomePageProductsGrid = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container spacing={2}>
      {products.map((props) => (
        <Grid key={props.id} item xs={4}>
          <Card {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePageProductsGrid;
