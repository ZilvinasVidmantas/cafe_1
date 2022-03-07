import React, { useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  TextField,
  MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategories,
  categoriesSelector,
} from '../../../../store/categories';
import FileUploadField from '../../../../components/file-upload-field';

const initialValues = {
  category: '',
  images: [],
  properties: [],
};

const ProductFormPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const {
    values,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
  });

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const category = categories.find((x) => x.id === categoryId);
    setValues({
      ...values,
      category: categoryId,
      properties: category.properties.map((x) => ({ ...x, value: '' })),
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
  }, []);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Typography variant="h2" sx={{ mb: 3 }}>Kurti naują produktą</Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          flexGrow: 9,
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
              name={`properties[${i}]`}
              onChange={(e) => handlePropertyChange(x.name, e.target.value)}
              value={x.value}
            />
          ))}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ alignSelf: 'center' }}
            size="large"
          >
            Kurti
          </Button>
        </Paper>

        <FileUploadField
          imgDataArr={values.images}
          onChange={handleImageChange}
          sx={{ flexGrow: 5 }}
        />
      </Box>
    </Box>
  );
};

export default ProductFormPage;
