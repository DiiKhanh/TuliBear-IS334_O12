import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Payment from "./Payment";
import { useState } from "react";
import { toast } from "sonner";
import Review from "./Review";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useOrderStore } from "~/store/useOrderStore";
import { useCartStore } from "~/store/useCartStore";
import StripeView from "./StripeView";
import { usePaymentStore } from "~/store/usePaymentStore";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { shipping } = usePaymentStore();
  const { removeOrder } = useOrderStore();
  const { clearCart } = useCartStore();
  const navigate = useNavigate();

  const payHandler = () => {
    if (paymentMethod === "cod") {
      clearCart();
      removeOrder();
      toast.success("Đặt hàng thành công!");
      // Chuyển hướng tới route mới
      navigate("/checkout/success", {
        state: {
          email: shipping.email,
          name: shipping.firstName,
          method: "cod"
        }
      });
      return;
    }

    if (paymentMethod === "online-payment-stripe") {
      return;
    }

    if (paymentMethod === "online-payment-vnpay") {
      return;
    }

    // post email to backend to send email

  };

  const changePaymentMethodHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Chọn hình thức thanh toán
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Payment method={paymentMethod} onChangeMethod={changePaymentMethodHandler} />
        </Grid>
        <Grid item xs={6}>
          <Review />
        </Grid>

        <Grid item xs={12}>
          {
            paymentMethod === "online-payment-stripe" && <StripeView />
          }
          <FormControlLabel
            control={<Checkbox color="primary" name="saveCard" value="yes" />}
            label="Ghi nhớ tài khoản thanh toán cho lần tiếp theo"
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={payHandler}
              sx={{ mt: 3, ml: 1 }}
            >
              Đặt hàng
            </Button>
          </Box>
        </Grid>

      </Grid>
    </>
  );
}