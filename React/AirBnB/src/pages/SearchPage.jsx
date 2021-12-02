import React, { useState } from 'react';
import {
  Grid,
  Autocomplete,
  TextField,
  Button
} from '@mui/material';

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
  const country = selectedCountry?.label ?? null;

  const handleCountryChange = (_, selectedCountry) => {
    // 1
    setCities(selectedCountry ? selectedCountry.cities : []);
    // 2
    // setCities(selectedCountry?.cities ?? []);
    // 3
    // if (selectedCountry) setCities(selectedCountry.cities);
    // else setCities([]);

    setSelectedCountry(selectedCountry);
    setCity(null);
  };

  const handleCityChange = (_, selectedCity) => setCity(selectedCity);

  console.log(country, city);

  return (
    <form>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xl={4}>
          <Autocomplete
            disablePortal
            id="country"
            options={countries}
            sx={{ width: 300 }}
            value={selectedCountry}
            onChange={handleCountryChange}
            renderInput={(props) => <TextField{...props} label="Šalis" name="country" />}
          />
        </Grid>
        <Grid item xl={4}>
          <Autocomplete
            disablePortal
            id="city"
            options={cities}
            value={city}
            onChange={handleCityChange}
            disabled={cities.length === 0}
            sx={{ width: 300 }}
            renderInput={(props) =>
              <TextField
                {...props}
                label="Miestas"
                name="city"
              />
            }
          />
        </Grid>
        <Grid item xl={4}>

        </Grid>
      </Grid>
      <Button type="submit" variant="contained">Submit</Button>
    </form>

  );
};

export default SearchPage;


/*
  * Sukurti Formos vaizdą kuriame būtų tokie laukai:

    * Šalis - searchable select
        https://mui.com/components/autocomplete/
    * Miestas - searchable select
        https://mui.com/components/autocomplete/
    * Būtso pobūdis - select

    * Datos pradžia - Date picker
        https://mui.com/components/pickers/
    * Datos pabaiga - Date picker
        https://mui.com/components/pickers/

    * Kaina - Slider  nuo..iki
        https://mui.com/components/slider/#minimum-distance

*/
