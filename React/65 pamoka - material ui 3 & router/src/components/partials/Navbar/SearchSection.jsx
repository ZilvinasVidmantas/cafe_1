import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CapsuleButton from "../../buttons/CapsuleButton";
import { shadowStyles } from "../../../styles/sxHelpers";

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


const SearchSection = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <SearchInputContainer height={48} sx={shadowStyles}>
        <Typography sx={{ fontWeight: 'fontWeightMedium', fontSize: 14 }}>Pradėkite paiešką</Typography>
        <IconCircle size={32}>
          <SearchIcon sx={{ fontSize: 20 }} />
        </IconCircle>
      </SearchInputContainer>
    </Box>
  );
};

export default SearchSection;
