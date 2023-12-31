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
import paymentApi from "~/apis/modules/payment.api";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { shipping } = usePaymentStore();
  const { priceNow, orderList } = useOrderStore();
  const navigate = useNavigate();


  const payHandler = async () => {
    if (paymentMethod === "cod") {
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
      navigate("/checkout/success", {
        state: {
          email: shipping.email,
          name: shipping.firstName,
          method: "stripe"
        }
      });
      return;
    }

    if (paymentMethod === "online-payment-vnpay") {
      const data = {
        name: shipping.firstName,
        email: shipping.email,
        amount: priceNow,
        address: shipping.address,
        products: orderList
      };
      const link = await paymentApi.vnpay(data);
      if (!link.vnpUrl) return null;
      // Chuyển hướng đến link
      window.location.href = link.vnpUrl;
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