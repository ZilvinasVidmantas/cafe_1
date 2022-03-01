import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Box,
} from '@mui/material';
import {
  categoriesSelector,
  fetchCategories,
} from '../../../../store/categories';

const CategoryPanelPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <Box>
      <Typography element="h1" variant="h2">Category panel</Typography>
      <pre>
        {
          JSON.stringify(categories, null, 2)
        }
      </pre>
    </Box>
  );
};
export default CategoryPanelPage;
