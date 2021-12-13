import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CapsuleButton from '../../buttons/capsule-button';
import { shadowStyles } from '../../../styles/sx-helpers';

const SearchInputContainer = styled(CapsuleButton)(({ theme }) => ({
  width: 300,
  padding: 0,
  height: 48,
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  border: `1px solid ${theme.palette.grey[200]}`,
}));

const IconCircle = styled(Box)(({ theme, size }) => ({
  height: size,
  width: size,
  borderRadius: '50%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const NavbarSearchSection = () => (
  <Link
    style={{
      display: 'flex', justifyContent: 'center', width: '100%', textDecoration: 'none',
    }}
    to="/search"
  >
    <SearchInputContainer height={48} sx={shadowStyles}>
      <Typography sx={{ fontWeight: 'fontWeightMedium', fontSize: 14 }}>Pradėkite paiešką</Typography>
      <IconCircle size={32}>
        <SearchIcon sx={{ fontSize: 20 }} />
      </IconCircle>
    </SearchInputContainer>
  </Link>
);

export default NavbarSearchSection;
