import { Helmet } from "react-helmet-async";
import CheckoutView from "~/sections/checkout/CheckoutView";

const CheckoutPage = () => {
  return (
    <>
      <Helmet>
        <title> Checkout | TuliBear </title>
      </Helmet>

      <CheckoutView />
    </>
  );
};

export default CheckoutPage;