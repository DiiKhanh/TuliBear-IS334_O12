import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TableCart from "./TableCart";
import { Button, Divider, Typography } from "@mui/material";
import { valueLabelFormat } from "~/utils/format.js";
import HeroContainer from "~/components/hero/HeroContainer";
import { useCartStore } from "~/store/useCartStore";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "~/store/useOrderStore";

const CartView = () => {
  const { cartItems, totalAmount } = useCartStore();
  const { orderPlace } = useOrderStore();
  const navigate = useNavigate();

  if (!cartItems || !totalAmount) {
    return (
      <Container maxWidth="xl" sx={{ marginTop:"100px", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Typography>Hiện không có sản phẩm nào trong giỏ hàng</Typography>
      </Container>
    );
  }


  const handleOrder = () => {
    navigate("/checkout");
    orderPlace(cartItems);
  };

  return (
    <>
      <HeroContainer/>
      <Container maxWidth="xl" sx={{ marginY:"5rem" }}>
        <Stack direction={{ xs:"column", md:"row" }}paddingX={5} spacing={1}>
          <Box flex={2}>
            <TableCart cartItems={cartItems} />
          </Box>
          <Box flex={1.2}>
            <Stack direction="column" sx={{
              border:"10px solid #ececec",
              padding:"20px",
              bgcolor:"#fff" }}
            spacing={3}
            >
              <Typography fontWeight="bold" fontSize="18px"
                textTransform="uppercase"
                paddingTop="20px">Cộng giỏ hàng</Typography>
              <Divider />
              <Stack direction="row" justifyContent="space-between">
                <Typography>Tạm tính</Typography>
                <Typography color="primary.price">{valueLabelFormat(totalAmount)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography>Mã giảm giá</Typography>
                <TextField id="outlined-basic" label="Nhập mã giảm giá" variant="outlined" />
              </Stack>
              <Divider/>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Tổng</Typography>
                <Typography color="primary.price">{valueLabelFormat(totalAmount)}</Typography>
              </Stack>
              <Divider/>
              <Button variant="contained" fullWidth
                onClick={() => handleOrder()}
              >Tiến hành thanh toán</Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>

  );
};

export default CartView;