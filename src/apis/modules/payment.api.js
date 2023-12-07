import axios from "axios";

// const paymentEndpoint = {
//   vnpay: () => `order/vnpay`
// };

const paymentApi = {
  vnpay: async ({ name, email, products, address, amount }) => {
    try {
      const res = await axios.post(
        "https://tulibear-api.vercel.app/order/vnpay", { name, email, products, address, amount }
      );
      // console.log(res);
      return res.data;
    } catch (err) { return { err }; }
  },
  sendEmail: async ({ name, email, products, address, amount }) => {
    try {
      const res = await axios.post(
        "https://tulibear-api.vercel.app/send", { name, email, products, address, amount }
      );
      return { res };
    } catch (err) { return { err }; }
  }
};

export default paymentApi;