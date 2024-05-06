import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Stack, Typography, Grid, Rating } from "@mui/material";
import { useState } from "react";

const SelectSize = () => {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <Box sx={{ width: 210, height: 48 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          onChange={handleChange}
          label="Select Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="S">Small</MenuItem>
          <MenuItem value="M">Medium</MenuItem>
          <MenuItem value="L">Large</MenuItem>
          <MenuItem value="XL">Extra Large</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectSize;
