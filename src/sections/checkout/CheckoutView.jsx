import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import ListOrder from "./ListOrder";
import { useOrderStore } from "~/store/useOrderStore";

const steps = ["Danh sách sản phẩm", "Thông tin giao hàng", "Thông tin thanh toán"];

function getStepContent(step) {
  switch (step) {
  case 0:
    return <ListOrder />;
  case 1:
    return <AddressForm />;
  case 2:
    return <PaymentForm />;
  default:
    throw new Error("Có lỗi!");
  }
}

const CheckoutView = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { orderList } = useOrderStore();

  return (
    <>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Thanh toán
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Cảm ơn bạn đã đặt hàng.
              </Typography>
              <Typography variant="subtitle1">
              Mã đơn hàng của bạn là #2001539. Chúng tôi đã gửi email xác nhận đơn hàng của bạn và sẽ gửi cho bạn thông tin cập nhật khi đơn hàng của bạn được giao.
              </Typography>
            </React.Fragment>
          ) : ( */}
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Quay lại
                </Button>
              )}

              {activeStep < steps.length - 1 && (
                orderList.length === 0 ? <>
                  Chưa có sản phẩm
                </> : <Button onClick={handleNext} sx={{ mt: 3, ml: 1 }} variant="contained">
                  Tiếp tục
                </Button>
              )}
            </Box>
          </React.Fragment>
          {/* )} */}
        </Paper>
      </Container>
    </>
  );
};

export default CheckoutView;