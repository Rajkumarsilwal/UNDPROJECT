import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      size="small"
      sx={{
        backgroundColor: 'white',
        borderRadius: '5px',
        width: '250px',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
