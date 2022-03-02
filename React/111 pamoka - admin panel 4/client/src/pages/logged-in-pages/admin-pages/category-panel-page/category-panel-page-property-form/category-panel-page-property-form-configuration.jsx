import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const propertyTypeOptions = ['simple', 'range', 'options', 'autocomplete'];
const collectionOptions = ['nauja kolekcija', 'monitorBrands', 'monitorScreenTypes', 'monitorScreenSizes'];

const propertyTypeRequiresCollection = (propertyType) => ['options', 'autocomplete'].includes(propertyType);

const isNewCollection = (collection) => collection === collectionOptions[0];

const CategoryPanelPagePropertyFormConfiguration = () => {
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handlePropertyTypeChange = (_, { props: { value } }) => {
    setPropertyType(value);
    if (propertyTypeRequiresCollection(value)) {
      setSelectedCollection(collectionOptions[0]);
    }
  };

  const handleCollectionChange = (_, { props: { value } }) => {
    setSelectedCollection(value);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Savybės pavadinimas"
      />
      <TextField
        label="Savybės filtro tipas"
        select
        inputProps={{
          sx: { width: 150 },
        }}
        value={propertyType}
        onChange={handlePropertyTypeChange}
      >
        {propertyTypeOptions.map((x) => (
          <MenuItem key={x} value={x}>{x}</MenuItem>
        ))}
      </TextField>
      {
        propertyTypeRequiresCollection(propertyType) && (
          <>
            <TextField
              label="Kolekcija"
              select
              inputProps={{
                sx: { width: 150 },
              }}
              value={selectedCollection}
              onChange={handleCollectionChange}
            >
              {collectionOptions.map((x) => (
                <MenuItem key={x} value={x}>{x}</MenuItem>
              ))}
            </TextField>
            {
              isNewCollection(selectedCollection) && (
                <TextField
                  label="Kolekcijos pavadinimas"
                />
              )
            }
          </>
        )
      }
      <IconButton color="error" sx={{ alignSelf: 'center' }} size="small">
        <DeleteIcon sx={{ fontSize: 25 }} />
      </IconButton>
    </Box>
  );
};

export default CategoryPanelPagePropertyFormConfiguration;
