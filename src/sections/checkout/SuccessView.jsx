import { Box, Typography } from "@mui/material";


import { ReactElement, useEffect, useState } from "react";


function SuccessView() {

  return (
    <>
      <BuySteppers activeStep={3} />
      <Title sx={{ textAlign: "center" }}>ĐẶT HÀNG THÀNH CÔNG</Title>
      <Image src={`/assets/images/cod.svg`} alt="" width={120} height={120} className="mx-auto my-10" />
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ mb: "12px" }}>
            Cảm ơn Quý khách {name || shippingInfor.name} đã mua hàng trên Brother Shop!
          </Typography>
          <Typography sx={{ width: { md: "85%", lg: "80%", xl: "65%" }, mx: "auto", mb: "12px", px: "12px" }}>
            Thời gian giao hàng dự kiến từ 2 - 5 ngày (có thể kéo dài hơn nếu bị ảnh hưởng bởi những tình huống bất khả
            kháng: thiên tai, bão lũ...). Brother Shop sẽ liên lạc với quý khách để xác nhận đơn và thông báo cụ thể.
          </Typography>
          <Typography>Rất mong quý khách hàng thông cảm!</Typography>
          <Typography sx={{ width: { md: "85%", lg: "80%", xl: "65%" }, mx: "auto", mb: "12px", px: "12px" }}>
            Để xem lại thông tin đơn hàng, quý khách vui lòng kiểm tra xác nhận đơn hàng đã được gửi qua email{" "}
            <strong>{email || shippingInfor.email}</strong>
          </Typography>
          <Typography sx={{ width: { md: "85%", lg: "80%", xl: "65%" }, mx: "auto", mb: "12px", px: "12px" }}>
            Trong trường hợp Quý khách không phải là Người trực tiếp nhận hàng. Quý khách vui lòng thông báo cho Người
            nhận luôn bật điện thoại để nhận liên lạc từ nhân viên giao hàng của Brother Shop
          </Typography>
          <Link href="/">
            <Button className="px-10 mb-8">Trở về trang chủ</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default SuccessView;