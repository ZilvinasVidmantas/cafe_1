import React from 'react';
import { useFormik } from 'formik';
import {
  Typography,
  Box,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CategoryPanelPagePropertyFormConfiguration from './category-panel-page-property-form-configuration';

let idCounter = 0;

const createEmptyProperty = () => {
  idCounter += 1;

  return {
    id: String(idCounter),
    propertyName: '',
    propertyType: 'simple',
    collectionRef: 'nauja kolekcija',
    collectionName: '',
  };
};

const initialValues = {
  propertiesData: [createEmptyProperty()],
};

const CategoryPanelPagePropertyForm = () => {
  const {
    values: { propertiesData },
    dirty,
    setFieldValue,
  } = useFormik({
    initialValues,
  });

  const addProperty = () => {
    setFieldValue(
      'propertiesData',
      [
        ...propertiesData,
        createEmptyProperty(),
      ],
    );
  };

  const deleteProperty = (id) => {
    const yes = window.confirm('Do you realy want to delete property?');
    if (yes) {
      setFieldValue(
        'propertiesData',
        propertiesData.filter((x) => x.id !== id),
      );
    }
  };

  const changePropertyName = (id, value) => {
    console.log('changePropertyName');
    console.log(id, value);
  };

  const changePropertyType = (id, value) => {
    console.log('changePropertyType');
    console.log(id, value);
  };

  const changeCollectionRef = (id, value) => {
    console.log('changeCollectionRef');
    console.log(id, value);
  };

  const changeCollectionName = (id, value) => {
    console.log('changeCollectionName');
    console.log(id, value);
  };

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography sx={{ fontSize: 22, mb: 3 }}>
        Kategorijos savybių konfigūracija
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {
          propertiesData.map((propertyData) => (
            <CategoryPanelPagePropertyFormConfiguration
              key={propertyData.id}
              {...propertyData}
              onPropertyNameChange={changePropertyName}
              onPropertyTypeChange={changePropertyType}
              onCollectionRefChange={changeCollectionRef}
              onCollectionNameChange={changeCollectionName}
              onDelete={deleteProperty}
            />
          ))
        }
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton
          size="large"
          color="secondary"
          onClick={addProperty}
        >
          <AddCircleIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!dirty}
        >
          Atnaujinti savybes
        </Button>
      </Box>
    </Paper>
  );
};

export default CategoryPanelPagePropertyForm;
