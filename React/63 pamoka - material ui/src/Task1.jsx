import React, { useState } from 'react';
import {
  Typography,
  Box,
  Link
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Image from './components/Image'

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
const collapsableContentExtended = <>
  Rūta - užupietė, litvakų istorijos žinovė;<br />
  Ieva - diplomuota maisto ekspertė, aktyvaus laisvalaikio entuziastė.<br />
  Visi mes esame aktyvūs įvairių vietinių bendruomenių nariai.<br />
  Mūsų teikiamos patirtys yra išjaustos,  sukurtos ir nuolat tobulinamos mūsų pačių - visada surandant tvarų ryšį su vietos bendruomene ir joje veikinačiais mažais verslais.<br />
  Atvykite giliau pažinti mūsų mylimą ir puoselėjamą Užupio Respubliką - jos istoriją, kasdienybę, džiaugsmus ir iššukius.
</>;
const collapsableContent = 'Rūta - užupietė, litvakų istorijo…';

const Task1 = () => {
  const [contentCollapsed, setContentCollapsed] = useState(true);

  const content = contentCollapsed
    ?
    <>
      {collapsableContent}
      <Link
        color="inherit"
        sx={{ fontWeight: 'fontWeightBold', cursor: 'pointer' }}
        onClick={() => setContentCollapsed(false)}
      >
        skaityti daugiau
      </Link>
    </>
    : collapsableContentExtended;

  return (
    <Box component="section" sx={{ fontFamile: '' }}>
      <Typography component="h2" variant="h4" gutterBottom>Task 1</Typography>
      <Box sx={{ fontFamily }}>
        <Box sx={{ display: 'flex', mb: 3 }}>
          <Image
            src="https://www.toheco.net/SD08/msf/dt-person007-200x20017111edc-6e1c-49f1-933a-28336fab239c.jpg"
            style={{ borderRadius: '50%', marginRight: 16 }}
            width={56}
            height={56}
          />
          <Box>
            <Typography component="h3" variant="h6" sx={{ fontSize: 26, lineHeight: 1, fontFamily }}>
              Jūsų potyrio organizatorius – Kestas, susipažinkite
            </Typography>
            <Typography component="h2" variant="subtitle1" sx={{ lineHeight: 1, pt: 1, color: "#717171", fontFamily }}>
              Naudojasi Airbnb nuo 2019 m.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', mb: 1.5, gap: 3 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <StarIcon sx={{ height: 16, width: 16 }} color="primary" />
            <Typography sx={{ ml: 1.5, fontFamily }}>3 atsiliepimai</Typography>
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <VerifiedUserIcon sx={{ height: 16, width: 16 }} color="primary" />
            <Typography sx={{ ml: 1.5, fontFamily }}>Tapatybė patvirtinta</Typography>
          </Box>
        </Box>

        <Typography paragraph sx={{ fontFamily }}>
          Sveiki, mano vardas Kęstutis aš esu giliai į Vilnių šaknis įleidęs užupietis.<br />
          Kartu su mano svetingiausiomis draugėmis Vilija, Viktorija, Rūta ir Ieva esame grupė, kuri turi bendrą aistrą - savo svečiams įgyvendinti unikalius miesto ir priemiesčio nuotykius.<br />
          Kęstutis - rinkodaros entuziastas, Respublikos Vyriausybės narys; <br />
          Vilija - keliautoja, smagurė, dainuojančios revoliucijos kartos narė; <br />
          Viktorija - istorikė, keliautoja, laisva narė; <br />
          {content}
        </Typography>
      </Box>
    </Box>
  )
}

export default Task1
