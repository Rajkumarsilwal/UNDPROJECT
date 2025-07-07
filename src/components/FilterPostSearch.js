import { TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const FilterPostSearch = ({ searchTerm, onSearch }) => (
  <TextField
    id="search-posts"
    label="Search Posts"
    variant="outlined"
    type="search"
    fullWidth
    margin="normal"
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
    InputProps={{
      endAdornment: searchTerm && (
        <InputAdornment position="end">
          <IconButton
            onClick={() => onSearch('')}
            edge="end"
            aria-label="Clear search"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover svg, &:focus-visible svg': {
                color: 'primary.main',
              },
            }}
          >
            <ClearIcon />
          </IconButton>
        </InputAdornment>
      ),
      sx: {
        // Remove Chrome's built-in "X" button as I had issue in Firefox which show 2 X button
        '& input[type="search"]::-webkit-search-decoration': { display: 'none' },
        '& input[type="search"]::-webkit-search-cancel-button': { display: 'none' },
        '& input[type="search"]::-webkit-search-results-button': { display: 'none' },
        '& input[type="search"]::-webkit-search-results-decoration': { display: 'none' },
      },
    }}
  />
);

export default FilterPostSearch;

