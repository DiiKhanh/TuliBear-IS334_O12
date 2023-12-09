import Container from "@mui/material/Container";
import { useLocation, useSearchParams } from "react-router-dom";
import FailedCheckout from "./FailedCheckout";
import SuccessCheckout from "./SuccessCheckout";


function CheckoutSuccessPage() {
  const location = useLocation();
  const [searchParams]= useSearchParams();
  const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
  return (
    <Container maxWidth={false} sx={{ marginY: "100px" }}>
      {
        location?.search !== "" && vnp_ResponseCode !== "00" ?
          <FailedCheckout /> : <SuccessCheckout />
      }
    </Container>
  );
}

export default CheckoutSuccessPage;