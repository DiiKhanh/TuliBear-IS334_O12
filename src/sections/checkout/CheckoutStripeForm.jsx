import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutStripeForm = () => {
  return (
    <form>
      <PaymentElement />
    </form>
  );
};

export default CheckoutStripeForm;