import { TextField } from '@mui/material';

const FilterPostSearch = ({ searchTerm, onSearch }) => {
  return (
    <TextField
      id="search-posts"
      label='Search Posts'
      variant='outlined'
      type="search"
      fullWidth
      margin='normal'
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default FilterPostSearch;
