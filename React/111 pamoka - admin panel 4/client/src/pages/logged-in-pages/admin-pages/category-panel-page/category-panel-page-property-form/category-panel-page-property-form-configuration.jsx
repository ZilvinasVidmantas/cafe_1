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

const typeRequiresCollection = (type) => ['options', 'autocomplete'].includes(type);

const isNewCollection = (collection) => collection === collectionOptions[0];

const CategoryPanelPagePropertyFormConfiguration = ({
  id,
  name,
  type,
  collectionRef,
  collectionName,
  onKeyChange,
  onDelete,

}) => (
  <Box sx={{ display: 'flex', gap: 2 }}>
    <TextField
      label="Savybės pavadinimas"
      value={name}
      onChange={(e) => onKeyChange(id, 'name', e.target.value)}
    />
    <TextField
      label="Savybės filtro tipas"
      select
      inputProps={{
        sx: { width: 150 },
      }}
      value={type}
      onChange={(_, { props: { value } }) => onKeyChange(id, 'type', value)}
    >
      {propertyTypeOptions.map((x) => (
        <MenuItem key={x} value={x}>{x}</MenuItem>
      ))}
    </TextField>
    {
      typeRequiresCollection(type) && (
        <>
          <TextField
            label="Kolekcija"
            select
            inputProps={{
              sx: { width: 150 },
            }}
            value={collectionRef}
            onChange={(_, { props: { value } }) => onKeyChange(id, 'collectionRef', value)}
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
                onChange={(e) => onKeyChange(id, 'collectionName', e.target.value)}
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
