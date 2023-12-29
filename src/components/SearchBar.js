//SearchBar.js
import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {debounce} from 'lodash';

export default function SearchBar({data, onSearch}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearch = debounce(async query => {
    try {
      let results = [];
      if (query) {
        results = [
          ...data.filter(item => {
            if (item.title) {
              return item.title.toLowerCase().includes(query.toLowerCase());
            }
            if (item.name) {
              return item.name.toLowerCase().includes(query.toLowerCase());
            } else {
              return null;
            }
          }),
        ];
      } else {
        results = [...data];
      }

      setSearchResults(results);
      onSearch(results, query);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => {
      debouncedSearch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <Autocomplete
      sx={{width: '75vh'}}
      id="search-bar"
      options={searchResults.map(result => result.title || result.name)}
      onInputChange={(event, newInputValue) => setSearchQuery(newInputValue)}
      renderInput={params => (
        <TextField
          {...params}
          label="Start typing to search"
          variant="outlined"
        />
      )}
    />
  );
}
