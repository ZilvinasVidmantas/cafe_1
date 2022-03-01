import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Divider,
  CircularProgress,
  TextField,
  Paper,
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

  const onSubmit = (e) => {
    e.preventDefault();
  };

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
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Paper
                component="form"
                sx={{ width: 350, p: 3, mt: 2 }}
                onSubmit={onSubmit}
              >
                <Typography
                  sx={{ fontSize: 22, mb: 3 }}
                >
                  Pagrindinė informacija
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  gap: 2,
                }}
                >
                  <TextField
                    value={category.title}
                    label="Pavadinimas"
                    inputProps={{
                      sx: { width: 350 },
                    }}
                  />
                  <CategoryPanelPageIconSelect
                    value={category.icon}
                    onChange={changeIcon}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Išsaugoti pakitimus
                  </Button>
                </Box>
              </Paper>
              <Paper
                sx={{ flexGrow: 1, p: 3, mt: 2 }}
              >
                <Typography
                  sx={{ fontSize: 22, mb: 3 }}
                >
                  Savybės
                </Typography>
                <Box>
                  Kategorijai kuriamos savybės, kurios gali būti susietos su kolekcijomis.
                  Susijus savybes su kolekcijomis, automatiškai pritaikomi filtrai.
                </Box>
              </Paper>
            </Box>
          )
      }

    </Box>
  );
};

export default CategoryPanelPage;
