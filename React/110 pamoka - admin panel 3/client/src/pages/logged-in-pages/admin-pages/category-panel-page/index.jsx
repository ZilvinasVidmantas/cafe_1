import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
  CircularProgress,
  // Alert,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import {
  categorySelector,
  fetchCategory,
} from '../../../../store/categories';
import CategoryPanelPageIconSelect from './category-panel-page-icon-select';

const CategoryPanelPage = () => {
  const { state: { id } } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const category = useSelector(categorySelector(id));

  const changeIcon = (_, { props: { value } }) => {
    console.log(value);
  };

  useEffect(() => {
    dispatch(fetchCategory(id));
  }, []);

  return (
    <Box>
      <Button onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon />
        <Typography sx={{ ml: 2 }}>Back</Typography>
      </Button>
      <Divider sx={{ mt: 2, mb: 1 }} />
      {
        !category
          ? (
            <Box>
              <CircularProgress />
            </Box>
          )
          : (
            <>
              <Typography element="h1" variant="h2">{category.title}</Typography>
              <CategoryPanelPageIconSelect
                value={category.icon}
                onChange={changeIcon}
              />
              <pre>
                {JSON.stringify(category, null, 2)}
              </pre>
            </>
          )
      }

    </Box>
  );
};

export default CategoryPanelPage;
