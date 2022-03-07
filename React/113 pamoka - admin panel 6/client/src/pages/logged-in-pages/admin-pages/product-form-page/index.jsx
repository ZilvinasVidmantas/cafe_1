import React, { useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  TextField,
  MenuItem,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategories,
  categoriesSelector,
} from '../../../../store/categories';
import {
  fetchCollections,
  collectionsSelector,
} from '../../../../store/collections';
import FileUploadField from '../../../../components/file-upload-field';
import validationSchema from './validation-schema';

const initialValues = {
  category: '',
  images: [],
  properties: [],
};

const ProductFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const collections = useSelector(collectionsSelector);
  const {
    values,
    errors,
    dirty,
    isValid,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema,
  });

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const category = categories.find((x) => x.id === categoryId);
    const properties = category.properties.map((prop) => {
      const formattedProp = { ...prop };
      if (formattedProp.type !== 'range') {
        formattedProp.data = collections.find((c) => c.title === prop.collection).data;
      }
      formattedProp.value = '';
      return formattedProp;
    });
    setValues({
      ...values,
      category: categoryId,
      properties,
    });
  };

  const handleImageChange = (newImages) => {
    setFieldValue('images', newImages);
  };

  const handlePropertyChange = (name, value) => {
    setFieldValue('properties', values.properties.map((x) => (x.name === name
      ? { ...x, value }
      : x)));
  };

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCollections());
  }, []);

  console.log(errors);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Typography variant="h2" sx={{ mb: 3 }}>Kurti naują produktą</Typography>
      <Grid container columnSpacing={4}>
        <Grid item xs={7}>

          <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 3,
          }}
          >
            <TextField
              label="Pasirinkite kategoriją"
              select
              fullWidth
              name="category"
              value={values.category}
              onChange={handleCategoryChange}
            >
              {categories.map((x) => (
                <MenuItem key={x.id} value={x.id}>{x.title}</MenuItem>
              ))}
            </TextField>
            <Divider textAlign="left">Produkto savybės</Divider>
            {values.properties.length > 0 && values.properties.map((x, i) => (
              <TextField
                key={x.name}
                label={x.name}
                type={x.type === 'range' ? 'number' : 'text'}
                select={x.type !== 'range'}
                name={`properties[${i}]`}
                onChange={(e) => handlePropertyChange(x.name, e.target.value)}
                value={x.value}
              >
                {x.type === 'range' ? null : x.data.map((d) => (
                  <MenuItem key={d.id} value={d.id}>{d.title}</MenuItem>
                ))}
              </TextField>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ alignSelf: 'center' }}
              size="large"
              disabled={!dirty || !isValid}
            >
              Kurti
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <FileUploadField
            imgDataArr={values.images}
            onChange={handleImageChange}
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductFormPage;
