import React from 'react';
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
  onPropertyNameChange,
  onPropertyTypeChange,
  onCollectionRefChange,
  onCollectionNameChange,
  onDelete,

}) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <TextField
      label="Savybės pavadinimas"
      value={propertyName}
      onChange={(e) => onPropertyNameChange(id, e.target.value)}
    />
    <TextField
      label="Savybės filtro tipas"
      select
      inputProps={{
        sx: { width: 150 },
      }}
      value={propertyType}
      onChange={(_, { props: { value } }) => onPropertyTypeChange(id, value)}
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
            value={collectionRef}
            onChange={(_, { props: { value } }) => onCollectionRefChange(id, value)}
          >
            {collectionOptions.map((x) => (
              <MenuItem key={x} value={x}>{x}</MenuItem>
            ))}
          </TextField>
          {
            isNewCollection(collectionRef) && (
              <TextField
                label="Kolekcijos pavadinimas"
                value={collectionName}
                onChange={(e) => onCollectionNameChange(id, e.target.value)}
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

export default CategoryPanelPagePropertyFormConfiguration;
