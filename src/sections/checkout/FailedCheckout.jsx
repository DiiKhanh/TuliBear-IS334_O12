import { Link, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";


function FailedCheckout() {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <img src={`/assets/images/cod.svg`} alt="" width={120} height={120}/>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ mb: "12px" }}>
            ĐƠN HÀNG ĐÃ BỊ HỦY DO GIAO DỊCH THẤT BẠI!
          </Typography>
          <Box sx={{ textAlign: "center", px: "12px" }}>
            <Typography>Đơn hàng đã bị hủy vì quý khách đã hủy giao dịch</Typography>
            <Typography>Quý khách vui lòng thực hiện lại mua hàng và thanh toán</Typography>
            <Typography>Chân thành cảm ơn quý khách đã tin tưởng TuliBear</Typography>
            <Link href="/checkout">
              <Button className="px-10 mb-8 mt-3">Thanh toán lại</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FailedCheckout;