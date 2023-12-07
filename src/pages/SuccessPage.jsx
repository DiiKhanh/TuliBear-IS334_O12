import { Helmet } from "react-helmet-async";
import SuccessView from "~/sections/checkout/Success";

const CheckoutPage = () => {
  return (
    <>
      <Helmet>
        <title> Done | TuliBear </title>
      </Helmet>

      <SuccessView />
    </>
  );
};

export default CheckoutPage;