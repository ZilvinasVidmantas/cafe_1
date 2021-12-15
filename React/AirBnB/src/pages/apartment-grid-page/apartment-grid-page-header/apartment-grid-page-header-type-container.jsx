import React, { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import HoverableSquareButton from '../../../components/buttons/hoverable-square-button';
import ApartmentContext from '../../../contexts/apartment-context';
import { URLSearchParamsToObject } from '../../../helpers/url-search-params-helpers';

const HoverableSquareButtonContainer = styled(Box)(({ theme }) => ({
  paddingBotton: theme.spacing(1),
  '&.active': {
    boxShadow: `0 1px 0 ${theme.palette.common.black}`,
  },
}));

const ApartmentGridPageHeaderTypeContainer = () => {
  const { apartmentTypes } = useContext(ApartmentContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectableApartmentTypes, setSelectableApartmentTypes] = useState([]);

  const setActiveApartmentType = (apartmentTypeTitle) => {
    const searchParamsObj = URLSearchParamsToObject(searchParams);

    if (apartmentTypeTitle !== 'Visi') {
      searchParamsObj.apartmentType = apartmentTypeTitle;
    } else {
      delete searchParamsObj.apartmentType;
    }

    setSearchParams(searchParamsObj);
  };

  // Skirtas sukurti Pasirenkamiem tipam
  useEffect(() => {
    if (apartmentTypes.length !== 0) {
      const apartmentType = searchParams.get('apartmentType');
      const newApartmentTypes = apartmentTypes.map((x) => ({ ...x, active: false }));
      const allTypesOption = {
        id: '-1',
        title: 'Visi',
        active: false,
      };
      newApartmentTypes.unshift(allTypesOption);

      if (apartmentType) {
        const selectedApartmentType = newApartmentTypes.find((x) => x.title === apartmentType);
        selectedApartmentType.active = true;
      } else {
        allTypesOption.active = true;
      }
      setSelectableApartmentTypes(newApartmentTypes);
    }
  }, [apartmentTypes, searchParams]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {
        selectableApartmentTypes.length > 0
          ? selectableApartmentTypes.map(({ id, title, active }) => (
            <HoverableSquareButtonContainer key={id} className={active ? 'active' : ''}>
              <HoverableSquareButton onClick={() => setActiveApartmentType(title)} active={active}>
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
