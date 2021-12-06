import React from 'react';
import Input from '@mui/material/Input';

const RangeFieldInput = ({ value, onChange }) => {

  return (
    <Input
      type="text"
      sx={{ width: 100 }}
      inputProps={{ sx: { textAlign: 'center' } }}
      value={value}
      onChange={onChange}
    />
  );
};

export default RangeFieldInput;

