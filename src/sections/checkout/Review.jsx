// import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useOrderStore } from "~/store/useOrderStore";
import { valueLabelFormat } from "~/utils/format";
import { usePaymentStore } from "~/store/usePaymentStore";


export default function Review() {
  const { orderList, priceNow } = useOrderStore();
  const { shipping } = usePaymentStore();
  return (
    <>
      <Typography variant="h6" gutterBottom textTransform="uppercase">
        Xem lại trước khi mua
      </Typography>
      <List disablePadding>
        {orderList?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name}
              secondary={<img src={product.images[0]} alt="image-order"
                style={{ objectFit:"cover", height:"80px", width:"80px" }}
              />}
            />
            <Typography variant="subtitle1" fontSize="16px">
              {product.quantity}{" "}x{" "}
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
          <ListItemText primary="Tổng hóa đơn" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {(valueLabelFormat(priceNow))}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        {
          shipping && <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Thông tin người nhận
            </Typography>
            <ListItemText primary="Họ tên:" secondary={shipping.firstName} />
            <ListItemText primary="Địa chỉ:" secondary={`${shipping.address}, ${shipping.state}, ${shipping.city}`} />
            <ListItemText primary="Số điện thoại:" secondary={shipping.phone} />
            <ListItemText primary="Email:" secondary={shipping.email} />
          </Grid>
        }
      </Grid>
    </>
  );
}