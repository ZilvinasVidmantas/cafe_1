import React, { useEffect } from 'react';
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

const formatProperty = ({ name, type, collection } = {}) => {
  idCounter += 1;

  return {
    id: String(idCounter),
    name: name ?? '',
    type: type ?? 'range',
    collectionRef: collection ?? 'nauja kolekcija',
    collectionName: '',
  };
};

const initialValues = {
  propertiesData: [formatProperty()],
};

const CategoryPanelPagePropertyForm = ({ properties }) => {
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
        formatProperty(),
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

  const changePropertyKey = (id, key, value) => {
    setFieldValue(
      'propertiesData',
      propertiesData.map((x) => (x.id === id
        ? { ...x, [key]: value }
        : x)),
    );
  };

  useEffect(() => {
    setFieldValue(
      'propertiesData',
      properties.map(formatProperty),
    );
  }, [properties]);

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
              onKeyChange={changePropertyKey}
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
