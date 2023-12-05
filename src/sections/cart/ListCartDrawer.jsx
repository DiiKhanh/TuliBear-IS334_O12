import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { valueLabelFormat } from "~/utils/format.js";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "~/store/useCartStore";
import { toast } from "sonner";

const ListCartDrawer = ({ toggleDrawer, cartItems, totalAmount }) => {
  const navigate = useNavigate();

  const { removeItemFromCart } = useCartStore();

  const handleDelete = (id) => {
    removeItemFromCart(id);
    toast.success("Đã xóa ra khỏi giỏ hàng!");
  };
  return (
    <Stack>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {
          cartItems?.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start" sx={{ gap:"10px" }}>
                <Box>
                  <img src={item.images[0]} width="80px" height="80px" loading="lazy" style={{
                    objectFit:"cover"
                  }}/>
                </Box>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      {item.quantity}x
                      <Typography
                        sx={{ display: "inline", fontSize:"16px" }}
                        component="span"
                        variant="body2"
                        color="primary.price"
                      >
                        {
                          item.priceSale ? valueLabelFormat(item.priceSale) : valueLabelFormat(item.price)
                        }
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Box >
                  <Tooltip title="Xóa" onClick={() => handleDelete(item.id)}>
                    <CloseIcon fontSize="medium"/>
                  </Tooltip>
                </Box>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))
        }

      </List>
      <Box marginY={3}>
        Tổng: <Typography component="span" color="primary.price">{valueLabelFormat(totalAmount)}</Typography>
      </Box>
      <Stack spacing={2}>
        <Button variant="contained" color="secondary" onClick={() => {
          navigate("cart");
          toggleDrawer();
        }}>
          Xem giỏ hàng
        </Button>
        {/* <Button variant="contained" onClick={() => {
          navigate("checkout");
          toggleDrawer();
        }}>
          Thanh toán
        </Button> */}
      </Stack>
    </Stack>
  );
};

export default ListCartDrawer;