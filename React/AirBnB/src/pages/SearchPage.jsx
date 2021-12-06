import React, { useState } from 'react';
import {
  Box,
  Grid,
  Autocomplete,
  TextField,
  Button,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Slider from '@mui/material/Slider';

const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

const countries = [
  { label: 'Lithuania', cities: ['Vilnius', 'Kaunas', 'Klaipėda'], },
  { label: 'United States', cities: ['New York', 'Chicago', 'Kansas'] },
  { label: 'Russia', cities: ['Maskva', 'Sanct Peterburg'] },
];

// const apartmentTypes = [];

const SearchPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight}px)`
}));

const SearchPage = () => {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [city, setCity] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [priceRange, setPriceRange] = useState([100, 1500]);

  const handleCountryChange = (_, selectedCountry) => {
    setCities(selectedCountry ? selectedCountry.cities : []);
    setSelectedCountry(selectedCountry);
    setCity(null);
  };

  const handleCityChange = (_, selectedCity) => setCity(selectedCity);

  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate);
    const nextDay = addDays(newStartDate, 1);
    if (nextDay > endDate) {
      setEndDate(nextDay);
    }
  }

  const handleEndDateChange = (...args) => {
    setEndDate(args);
  }

  const handlePriceRangeChange = (_, newValue) => {
    setPriceRange(newValue);
  }

  return (
    <SearchPageContainer component="form">
      <Box sx={{ width: 1 / 3 }}>
        <Typography align="center" sx={{ mb: 3 }} component="h2" variant="h4" color="primary">Ieškoti būsto nuomai</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Autocomplete
              id="country"
              fullWidth
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              renderInput={(props) => <TextField{...props} label="Šalis" name="country" />}
            />
          </Grid>
          <Grid item sm={12}>
            <Autocomplete
              id="city"
              fullWidth
              options={cities}
              value={city}
              onChange={handleCityChange}
              disabled={cities.length === 0}
              renderInput={(props) =>
                <TextField
                  {...props}
                  label="Miestas"
                  name="city"
                />
              }
            />
          </Grid>
          <Grid item sm={12}>
            <Autocomplete
              id="apartments"
              fullWidth
              options={[]}
              renderInput={(props) => <TextField{...props} label="Būsto tipas" name="apartmentType" />}
            />
          </Grid>

          <Grid item sm={12}>
            <DesktopDatePicker
              label="Atvykimo data"
              inputFormat="dd/MM/yyyy"
              minDate={new Date()}
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
            />
          </Grid>

          <Grid item sm={12}>
            <DesktopDatePicker
              minDate={startDate ? addDays(startDate, 1) : new Date()}
              label="Isvykimo data"
              inputFormat="dd/MM/yyyy"
              value={endDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} sx={{ width: '100%' }} />}
            />
          </Grid>

          <Grid item sm={12} >
            <Typography id="input-slider" gutterBottom>Kainos reziai</Typography>
            <Box sx={{ mt: 1, mb: 2, px: 1.5 }}>
              <Slider
                step={50}
                min={100}
                max={5000}
                aria-labelledby="priceRange"
                getAriaLabel={() => 'Kaina'}
                value={priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', jsutifyContent: 'center', gap: 2 }}>
          <Button type="submit" variant="contained">Show Apartments in Map</Button>
          <Button type="submit" variant="contained">Show Apartments in Grid</Button>
        </Box>
      </Box>
    </SearchPageContainer>

  );
};

export default SearchPage;
