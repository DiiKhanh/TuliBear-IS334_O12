import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

export default function TableNoData({ query }) {
  return (

    <Paper
      sx={{
        textAlign: "center",
        bgcolor:"transparent",
        boxShadow:"none",
        marginTop:"50px"
      }}
    >
      <Typography variant="h6" paragraph>
            Not found
      </Typography>

      <Typography variant="body2">
            No results found for &nbsp;
        <strong>&quot;{query}&quot;</strong>.
        <br /> Try checking for typos or using complete words.
      </Typography>
    </Paper>

  );
}

TableNoData.propTypes = {
  query: PropTypes.string
};