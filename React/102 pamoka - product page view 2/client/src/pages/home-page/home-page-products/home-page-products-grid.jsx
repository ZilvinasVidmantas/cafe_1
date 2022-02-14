import React from 'react';
import { Grid } from '@mui/material';
import Card from './home-page-products-card';

const HomePageProductsGrid = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>
    <Grid item xs={3}><Card /></Grid>

  </Grid>
);

export default HomePageProductsGrid;
