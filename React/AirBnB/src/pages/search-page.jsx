import React, { useState } from 'react';
import {
  Box,
  Grid,
  Autocomplete,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useNavigate } from 'react-router-dom';
import RangeField from '../fields/range-field/range-field';
import { addDays } from '../helpers/date-helpers';

const countries = [
  { label: 'Lithuania', cities: ['Vilnius', 'Kaunas', 'Klaipėda'] },
  { label: 'United States', cities: ['New York', 'Chicago', 'Kansas'] },
  { label: 'Russia', cities: ['Maskva', 'Sanct Peterburg'] },
];

const apartmentTypes = ['flat', 'house', 'cottage'];

const SearchPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight}px)`,
}));

const initialPriceRange = [10, 500];
const [minPrice, maxPrice] = initialPriceRange;

const SearchPage = () => {
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [apartmentType, setApartmentType] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [priceRange, setPriceRange] = useState(initialPriceRange);

  const navigate = useNavigate();

  const handleCountryChange = (_, selectedCountry) => {
    setCities(selectedCountry ? selectedCountry.cities : []);
    setCountry(selectedCountry);
    setCity(null);
  };

  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate);
    const nextDay = addDays(newStartDate, 1);
    if (nextDay > endDate) {
      setEndDate(nextDay);
    }
  };

  const formatFormData = () => {
    const [priceMin, priceMax] = priceRange;

    return {
      country: country?.label ?? null,
      city,
      apartmentType,
      startDate,
      endDate,
      priceMin,
      priceMax,
    };
  };

  const handleSubmit = (type) => {
    let to;
    switch (type) {
      case 'map':
        to = '/apartment-location';
        break;

      case 'grid':
        to = '/apartment-grid';
        break;

      default:
        throw new Error('Nėra tokio pasirikties tipo');
    }
    const data = formatFormData();
    navigate(to, { state: data });
  };

  return (
    <SearchPageContainer>
      <Paper sx={{ width: 400, p: 3 }} elevation={4}>
        <Typography align="center" sx={{ mb: 3 }} component="h2" variant="h4" color="primary">Ieškoti būsto nuomai</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Autocomplete
              id="country"
              fullWidth
              options={countries}
              value={country}
              onChange={handleCountryChange}
              renderInput={(props) => <TextField {...props} label="Šalis" name="country" />}
            />
          </Grid>
          <Grid item sm={12}>
            <Autocomplete
              id="city"
              fullWidth
              options={cities}
              value={city}
              onChange={(_, selectedCity) => setCity(selectedCity)}
              disabled={cities.length === 0}
              renderInput={(props) => (
                <TextField
                  {...props}
                  label="Miestas"
                  name="city"
                />
              )}
            />
          </Grid>
          <Grid item sm={12}>
            <Autocomplete
              id="apartments"
              fullWidth
              options={apartmentTypes}
              value={apartmentType}
              onChange={(_, selectedApartment) => setApartmentType(selectedApartment)}
              renderInput={(props) => <TextField {...props} label="Būsto tipas" name="apartmentType" />}
            />
          </Grid>
          <Grid item sm={6}>
            <DesktopDatePicker
              label="Atvykimo data"
              inputFormat="dd/MM/yyyy"
              minDate={new Date()}
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
            />
          </Grid>
          <Grid item sm={6}>
            <DesktopDatePicker
              minDate={startDate ? addDays(startDate, 1) : new Date()}
              label="Isvykimo data"
              inputFormat="dd/MM/yyyy"
              value={endDate}
              onChange={(newEndDate) => setEndDate(newEndDate)}
              renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
            />
          </Grid>
          <Grid item sm={12}>
            <RangeField
              title="Kainos rėžiai"
              onChange={(newPrice) => setPriceRange(newPrice)}
              value={priceRange}
              min={minPrice}
              max={maxPrice}
              step={10}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', jsutifyContent: 'center', gap: 2 }}>
          <Button variant="contained" onClick={() => handleSubmit('map')}>Show Apartments in Map</Button>
          <Button variant="contained" onClick={() => handleSubmit('grid')}>Show Apartments in Grid</Button>
        </Box>
      </Paper>
    </SearchPageContainer>

  );
};

export default SearchPage;
