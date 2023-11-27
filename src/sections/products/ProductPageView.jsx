import { useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";


import ProductCard from "./ProductCard";
import ProductSort from "./ProductSort";
import ProductFilters from "./ProductFilters";
import Search from "./Search";
import TableNoData from "./TableNoData";
import { productsPage } from "~/_mock/product";
import { applyFilter, getComparator } from "~/utils/format";

// ----------------------------------------------------------------------


export default function ProductPageView() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  const [filterName, setFilterName] = useState("");
  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: productsPage,
    comparator: getComparator(null, null),
    filterName
  });

  const notFound = !dataFiltered.length && !!filterName;


  return (
    <Container sx={{ marginBottom:"50px" }}>
      <Typography variant="h4" sx={{ my:5, fontWeight:"bold", lineHeight:1.2 }}>
        Tất cả sản phẩm
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Search
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* s */}
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {dataFiltered.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {notFound && <TableNoData query={filterName} />}

    </Container>
  );
}