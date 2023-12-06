import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutStripeForm from "./CheckoutStripeForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51OJ4SnKYRWbpK4cCXFS3w6eyrbnmxP3kMUznyh5IiOjC7IoIIgXrKG8PUrn59EI3pXJrzslh7N0eTPaF4vyDVMSc00Lxc6YGl4");

export default function StripeView() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "pi_3OKDWeKYRWbpK4cC1yV2jGYg_secret_za0eIysIL6dWuZd5AQzs73QKz"
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutStripeForm />
    </Elements>
  );
}