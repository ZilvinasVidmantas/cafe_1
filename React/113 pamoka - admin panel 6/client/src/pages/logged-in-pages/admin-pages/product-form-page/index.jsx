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

  const onSubmit = (values) => {
    console.log(values);
  };

  const {
    values,
    errors,
    dirty,
    isValid,
    handleSubmit,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
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

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Typography variant="h2" sx={{ mb: 3 }}>Kurti nauj?? produkt??</Typography>
      <Grid container columnSpacing={4} component="form" onSubmit={handleSubmit}>
        <Grid item xs={7}>

          <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 3,
          }}
          >
            <TextField
              label="Pasirinkite kategorij??"
              select
              fullWidth
              name="category"
              value={values.category}
              onChange={handleCategoryChange}
              error={!!errors.category}
              helperText={errors.category}
            >
              {categories.map((x) => (
                <MenuItem key={x.id} value={x.id}>{x.title}</MenuItem>
              ))}
            </TextField>
            <Divider textAlign="left">Produkto savyb??s</Divider>
            {values.properties.length > 0 && values.properties.map((x, i) => (
              <TextField
                key={x.name}
                label={x.name}
                type={x.type === 'range' ? 'number' : 'text'}
                select={x.type !== 'range'}
                name={`properties[${i}]`}
                onChange={(e) => handlePropertyChange(x.name, e.target.value)}
                value={x.value}
                error={!!errors.properties && !!errors.properties[i]}
                helperText={
                  !!errors.properties && errors.properties[i] && errors.properties[i].value
                }
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
          <Box sx={{
            p: 2,
            mb: 0,
            border: errors.images ? 1 : 'none',
            borderColor: 'error.main',
          }}
          >
            <FileUploadField
              imgDataArr={values.images}
              onChange={handleImageChange}
              sx={{
                width: '100%',
              }}
            />
            {errors.images && (
              <Typography color="error">{errors.images}</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductFormPage;
