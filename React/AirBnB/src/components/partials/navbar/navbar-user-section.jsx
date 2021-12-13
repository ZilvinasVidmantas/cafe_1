import React from 'react';
import { Box, Link, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { shadowStyles, hoverStyles } from '../../../styles/sx-helpers';
import CapsuleButton from '../../buttons/capsule-button';

const UserSectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const UserCapsule = styled(CapsuleButton)(({ theme }) => ({
  border: 1,
  borderColor: theme.palette.grey[200],
  height: 42,
  display: 'flex',
  gap: theme.spacing(1),
  paddingRight: theme.spacing(0.5),
}));

const UserIconBadge = styled(Badge)(({ theme }) => ({
  '&>.MuiBadge-badge': {
    fontSize: 11,
    minWidth: 16,
    height: 16,
    width: 16,
    padding: '0 6px',
    top: 3,
    right: 3,
    boxShadow: `0 0 0 2px ${theme.palette.common.white}`,
  },
}));

const NavbarUserSection = () => (
  <UserSectionContainer>

    <Link href="https:///google.lt" underline="none">
      <CapsuleButton sx={hoverStyles}>
        Tapti šeimininku
      </CapsuleButton>
    </Link>

    <CapsuleButton sx={hoverStyles}>
      <LanguageIcon sx={{ fontSize: 20 }} />
    </CapsuleButton>

    <UserCapsule sx={shadowStyles}>
      <MenuIcon sx={{ fontSize: 18 }} />
      <UserIconBadge color="primary" badgeContent="9">
        <AccountCircleIcon sx={{ fontSize: 34 }} />
      </UserIconBadge>
    </UserCapsule>

  </UserSectionContainer>
);

export default NavbarUserSection;
