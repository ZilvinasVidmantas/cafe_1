import React from 'react';
import {
  Typography,
  Box,
  Container
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Image from './components/Image'

const App = () => {
  return (
    <Box component="main">
      <Container>
        <Box sx={{ display: 'flex'}}>
          <Image
            src="https://www.toheco.net/SD08/msf/dt-person007-200x20017111edc-6e1c-49f1-933a-28336fab239c.jpg"
            style={{ borderRadius: '50%' }}
          />
          <Typography align="center" component="h1" variant="h3" sx={{ mb: 4 }}>
            Aplikacijos pavadinimas
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ textOverflow: 'ellipsis', width: 1 / 4, whiteSpace: 'nowrap', overflow: 'hidden' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae doloribus nobis quae. Iste, odit, sunt perspiciatis voluptates sed deleniti adipisci ducimus illum fugiat est et ipsa voluptate at in ratione?
        </Typography>
        <StarIcon />
        <VerifiedUserIcon />


      </Container>
    </Box>
  )
};

export default App;
