import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const SearchInputContainer = styled(ButtonUnstyled)(({ theme, height }) => ({
  background: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[200]}`,
  height,
  width: 300,
  padding: 0,
  borderRadius: height / 2,
  boxShadow: theme.shadows[1],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(1),
  transition: theme.transitions.create(['box-shadow']),
  ":hover": {
    boxShadow: theme.shadows[2],
  }
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

const SearchSection = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <SearchInputContainer height={48}>
        <Typography sx={{ fontWeight: 'fontWeightMedium', fontSize: 14 }}>Pradėkite paiešką</Typography>
        <IconCircle size={32}>
          <SearchIcon sx={{ fontSize: 20 }} />
        </IconCircle>
      </SearchInputContainer>
    </Box>
  );
};

export default SearchSection;
