import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
const MuiSelect = () => {
//   const [country, setCountry] = useState("");
  const [country, setCountry] = useState<String[]>([]); // multiple value select
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value=event.target.value
    setCountry(typeof value=== 'string' ? value.split(',') : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size="small"
        color="secondary"
        helperText='please select your country'
        error
      >
        <MenuItem value="IN">Inida</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
