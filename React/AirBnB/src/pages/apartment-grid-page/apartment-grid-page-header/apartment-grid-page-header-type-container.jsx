import React, { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import HoverableSquareButton from '../../../components/buttons/hoverable-square-button';
import ApartmentContext from '../../../contexts/apartment-context';

const createActivatableApartmentTypes = (apartmentTypes) => apartmentTypes.map((apart, i) => ({
  ...apart,
  active: i === 0,
}));

const HoverableSquareButtonContainer = styled(Box)(({ theme }) => ({
  paddingBotton: theme.spacing(1),
  '&.active': {
    boxShadow: `0 1px 0 ${theme.palette.common.black}`,
  },
}));

const ApartmentGridPageHeaderTypeContainer = () => {
  const { apartmentTypes: initialApartmentTypes } = useContext(ApartmentContext);
  const [apartmentTypes, setApartmentTypes] = useState([]);

  const setActiveApartment = (id) => {
    setApartmentTypes((prev) => prev.map((apart) => ({
      ...apart,
      active: apart.id === id,
    })));
  };

  useEffect(() => {
    const activatableApartmentTypes = createActivatableApartmentTypes(initialApartmentTypes);
    setApartmentTypes(activatableApartmentTypes);
  }, [initialApartmentTypes]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {
        apartmentTypes.length > 0
          ? apartmentTypes.map(({ id, title, active }) => (
            <HoverableSquareButtonContainer key={id} className={active ? 'active' : ''}>
              <HoverableSquareButton onClick={() => setActiveApartment(id)} active={active}>
                {title}
              </HoverableSquareButton>
            </HoverableSquareButtonContainer>
          ))
          : null
      }

    </Box>
  );
};

export default ApartmentGridPageHeaderTypeContainer;
