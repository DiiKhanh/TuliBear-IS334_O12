import { Link, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { toast } from "sonner";
import paymentApi from "~/apis/modules/payment.api";
import { useCartStore } from "~/store/useCartStore";
import { useOrderStore } from "~/store/useOrderStore";
import { usePaymentStore } from "~/store/usePaymentStore";


function SuccessCheckout() {
  const { shipping } = usePaymentStore();
  const { removeOrder, priceNow, orderList } = useOrderStore();
  const { clearCart } = useCartStore();

  useEffect(() => {
    const sendEmail = async () => {
      const data = {
        name: shipping?.firstName,
        email: shipping?.email,
        amount: priceNow,
        address: shipping?.address,
        products: orderList
      };
      const { res, err } = await paymentApi.sendEmail(data);
      if (err) {
        toast.error("Có lỗi khi gửi email!");
        return;
      }
      if (res.status === 200) {
        toast.success("Đã gửi hóa đơn về email, vui lòng kiểm tra!");
        return;
      }

    };
    sendEmail();
    removeOrder();
    clearCart();
  }, []);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <img src={`/assets/images/cod.svg`} alt="" width={120} height={120}/>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ mb: "12px" }}>
            Cảm ơn Quý khách {shipping?.firstName} đã mua hàng trên TuliBear Shop!
          </Typography>
          <Typography sx={{ width: { md: "85%", lg: "80%", xl: "65%" }, mx: "auto", mb: "12px", px: "12px" }}>
            Thời gian giao hàng dự kiến từ 2 - 5 ngày (có thể kéo dài hơn nếu bị ảnh hưởng bởi những tình huống bất khả
            kháng: thiên tai, bão lũ...). TuliBear Shop sẽ liên lạc với quý khách để xác nhận đơn và thông báo cụ thể.
          </Typography>
          <Typography>Rất mong quý khách hàng thông cảm!</Typography>
          <Typography sx={{ width: { md: "85%", lg: "80%", xl: "65%" }, mx: "auto", mb: "12px", px: "12px" }}>
            Để xem lại thông tin đơn hàng, quý khách vui lòng kiểm tra xác nhận đơn hàng đã được gửi qua email{" "}
            <strong>{shipping?.email}</strong>
          </Typography>
          <Typography sx={{ width: { md: "85%", lg: "80%", xl: "65%" }, mx: "auto", mb: "12px", px: "12px" }}>
            Trong trường hợp Quý khách không phải là Người trực tiếp nhận hàng. Quý khách vui lòng thông báo cho Người
            nhận luôn bật điện thoại để nhận liên lạc từ nhân viên giao hàng của TuliBear Shop
          </Typography>
          <Link href="/">
            <Button >Trở về trang chủ</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default SuccessCheckout;