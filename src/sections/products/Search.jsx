import PropTypes from "prop-types";

import Toolbar from "@mui/material/Toolbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";


// ----------------------------------------------------------------------

export default function Search({ filterName, onFilterName }) {
  return (
    <Toolbar
      sx={{
        height: 60,
        padding:"10px 80px"
      }}
    >
      <OutlinedInput
        value={filterName}
        onChange={onFilterName}
        placeholder="Tìm kiếm sản phẩm..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon
              sx={{ color: "text.disabled", width: 20, height: 20 }}
            />
          </InputAdornment>
        }
      />

    </Toolbar>
  );
}

Search.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func
};