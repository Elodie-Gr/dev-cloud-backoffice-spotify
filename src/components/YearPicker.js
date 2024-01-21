import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const YearPicker = ({selectedYear, onYearChange}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 100}, (_, index) => currentYear - index);

  const handleYearChange = event => {
    const selectedYear = event.target.value;
    onYearChange(selectedYear);
  };

  return (
    <FormControl sx={{m: 2}} variant="filled" size="small">
      <InputLabel id="select-year">Year</InputLabel>
      <Select
        labelId="select-year"
        id="date"
        name="date"
        value={selectedYear}
        label="Select Year"
        onChange={handleYearChange}>
        {years.map(year => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default YearPicker;
