import React from 'react';
import {
  Typography,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import MonitorIcon from '@mui/icons-material/Monitor';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';

const categories = [
  { title: 'Monitoriai', Icon: MonitorIcon },
  { title: 'Vaizdo Plokštės', Icon: DeveloperBoardIcon },
  { title: 'Motininės plokštės', Icon: DashboardIcon },
  { title: 'Laptopai', Icon: LaptopMacIcon },
  { title: 'Išoriniai įrenginiai', Icon: AccountTreeIcon },
  { title: 'Operatyvi atmintis (RAM)', Icon: MemoryIcon },
  { title: 'Diskai', Icon: StorageIcon },
];

const HomePageHeader = () => (
  <Paper sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
    { categories.map(({ title, Icon }, i) => (
      <>
        <Button
          variant="text"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            textTransform: 'Capitalize',
          }}
          color="inherit"
        >
          <Typography>{title}</Typography>
          <Icon />
        </Button>
        { (i !== categories.length - 1) && <Divider orientation="vertical" flexItem />}
      </>
    ))}
  </Paper>
);

export default HomePageHeader;
