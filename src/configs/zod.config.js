import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const ShippingSchema = z.object({
  firstName: z.string().min(1, "Yêu cầu nhập thông tin họ tên"),
  phone: z.string().min(10, "Số điện thoại tối thiểu là 10 số").max(14, "Số điện thoại tối đa là 14 số").regex(phoneRegex, "Phải là số điện thoại"),
  email: z.string().email("Yêu cầu là email. Ví dụ: example@gmail.com").min(1, "Yêu cầu là email. Ví dụ: example@gmail.com"),
  address: z.string().min(5, "Yêu cầu nhập đúng địa chỉ"),
  city: z.string().min(2, "Yêu cầu nhập đúng thông tin"),
  state: z.string().min(2, "Yêu cầu nhập thông tin"),
  country: z.string().min(2, "Yêu cầu nhập thông tin"),
  zip: z.string().min(2, "Yêu cầu nhập thông tin")
});
