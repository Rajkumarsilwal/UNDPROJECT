import React from 'react';
import { TextField } from '@mui/material';

const FilterPostSearch = ({ searchTerm, onSearch }) => {
  return (
    <TextField
      label='Search Posts'
      variant='outlined'
      fullWidth
      margin='normal'
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)} 
    />
  );
};

export default FilterPostSearch;
