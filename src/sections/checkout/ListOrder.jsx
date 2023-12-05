import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useOrderStore } from "~/store/useOrderStore";
import { valueLabelFormat } from "~/utils/format.js";

const ListOrder = () => {
  const { orderList, priceNow } = useOrderStore();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Danh sách sản phẩm
      </Typography>
      <List disablePadding>
        {orderList.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${product.name} x ${product.quantity}`}
              secondary={
                <img src={product.images[0]} alt="img-order"
                  height="120px" width="120px"
                />
              }
            />
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: "text.disabled",
                  textDecoration: "line-through"
                }}
              >
                {product.priceSale && (valueLabelFormat(product.price))}
              </Typography>
      &nbsp;
              {product.priceSale ? (valueLabelFormat(product.priceSale)) : (valueLabelFormat(product.price))}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Tổng thanh toán" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {valueLabelFormat(priceNow)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default ListOrder;