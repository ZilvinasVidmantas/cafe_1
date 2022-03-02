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

const CategoryPanelPagePropertyFormConfiguration = ({
  id,
  propertyName,
  propertyType,
  collectionRef,
  collectionName,
  onDelete,
}) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(propertyType);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handlePropertyTypeChange = (_, { props: { value } }) => {
    setSelectedPropertyType(value);
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
        value={propertyName}
      />
      <TextField
        label="Savybės filtro tipas"
        select
        inputProps={{
          sx: { width: 150 },
        }}
        value={selectedPropertyType}
        onChange={handlePropertyTypeChange}
      >
        {propertyTypeOptions.map((x) => (
          <MenuItem key={x} value={x}>{x}</MenuItem>
        ))}
      </TextField>
      {
        propertyTypeRequiresCollection(selectedPropertyType) && (
          <>
            <TextField
              label="Kolekcija"
              select
              inputProps={{
                sx: { width: 150 },
              }}
              value={collectionRef}
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
                  value={collectionName}
                />
              )
            }
          </>
        )
      }
      <IconButton
        color="error"
        sx={{ alignSelf: 'center' }}
        size="small"
        onClick={() => onDelete(id)}
      >
        <DeleteIcon sx={{ fontSize: 25 }} />
      </IconButton>
    </Box>
  );
};

export default CategoryPanelPagePropertyFormConfiguration;
