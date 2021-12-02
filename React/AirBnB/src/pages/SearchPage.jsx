import React, { useState } from 'react';
import {
  Grid,
  Autocomplete,
  TextField,
  Button
} from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const countries = [
  { label: 'Lithuania', cities: ['Vilnius', 'Kaunas', 'Klaipėda'] },
  { label: 'United States', cities: ['New York', 'Chicago', 'Kansas'] },
  { label: 'Russia', cities: ['Maskva', 'Sanct Peterburg'] },
];

// const apartmentTypes = [];

const SearchPage = () => {
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  const country = selectedCountry?.label ?? null;

  const handleCountryChange = (_, selectedCountry) => {
    setCities(selectedCountry ? selectedCountry.cities : []);
    setSelectedCountry(selectedCountry);
    setCity(null);
  };

  const handleCityChange = (_, selectedCity) => setCity(selectedCity);

  const handleStartDateChange = (...args) => {
    console.log(args);
  }

  console.log(country, city);

  return (
    <form>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item sm={4}>
            <Autocomplete
              id="country"
              fullWidth
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              renderInput={(props) => <TextField{...props} label="Šalis" name="country" />}
            />
          </Grid>
          <Grid item sm={4}>
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
          <Grid item sm={4}>
            <Autocomplete
              id="apartments"
              fullWidth
              options={[]}
              renderInput={(props) => <TextField{...props} label="Būsto tipas" name="apartmentType" />}
            />
          </Grid>

          <Grid item sm={4}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">Submit</Button>
    </form>

  );
};

export default SearchPage;


/*
  * Sukurti Formos vaizdą kuriame būtų tokie laukai:

    // * Šalis - searchable select
    // * Miestas - searchable select
    * Būtso pobūdis - select

    * Datos pradžia - Date picker
        https://mui.com/components/pickers/
    * Datos pabaiga - Date picker
        https://mui.com/components/pickers/

    * Kaina - Slider  nuo..iki
        https://mui.com/components/slider/#minimum-distance

*/
