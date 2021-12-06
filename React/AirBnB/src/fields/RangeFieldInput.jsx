import React from 'react';
import Input from '@mui/material/Input';

const RangeFieldInput = () => {

  return (
    <Input
      type="text"
      sx={{ width: 100 }}
      inputProps={{ sx: { textAlign: 'center' } }}
      value={2000}
    />
  );
};

export default RangeFieldInput;

