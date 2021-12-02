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
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState([]);

  const handleCityChange = (_, selectedOption, type) => {
    switch (type) {
      case "selectOption":
        const { label: country, cities } = selectedOption;
        setCountry(country);
        setCities(cities);
        break;
      case "clear":
        setCountry('');
        setCities([]);
        break;

      default:
        break;
    }
  }

  return (
    <form>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xl={4}>
          <Autocomplete
            disablePortal
            id="country"
            options={countries}
            sx={{ width: 300 }}
            onChange={handleCityChange}
            renderInput={(props) => <TextField
              {...props}
              label="Šalis"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
            />}
          />
        </Grid>
        <Grid item xl={4}>
          <Autocomplete
            disablePortal
            id="city"
            options={cities}
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
  pertrauka 10 min.

  papildyti pagrindinės spalvos nustatymus šviesiu ir tamsiu atspalviais

*/




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
