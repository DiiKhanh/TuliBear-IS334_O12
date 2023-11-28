import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import Label from "~/components/label/Label";

import { valueLabelFormat } from "~/utils/format.js";
import RouterLink from "~/routes/RouterLink";

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === "sale" && "error") || "info"}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: "absolute",
        textTransform: "uppercase"
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      loading="lazy"
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute"
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through"
        }}
      >
        {product.priceSale && (valueLabelFormat(product.priceSale))}
      </Typography>
      &nbsp;
      {valueLabelFormat(product.price)}
    </Typography>
  );

  return (
    <Card sx={{ cursor:"pointer" }}>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {product.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }} alignItems="center">
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap component={RouterLink} href={`${product.id}`}>
          {product.name}
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="center">
          {renderPrice}
        </Stack>
        <Button variant="contained">Mua ngay</Button>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object
};