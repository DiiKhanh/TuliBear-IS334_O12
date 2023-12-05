import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CartView from "~/sections/cart/CartView";
import { useOrderStore } from "~/store/useOrderStore";

const CartPage = () => {

  const { removeOrder } = useOrderStore();

  useEffect(() => {
    removeOrder();
  }, [removeOrder]);

  return (
    <>
      <Helmet>
        <title> Cart | TuliBear </title>
      </Helmet>
      <CartView />
    </>
  );
};

export default CartPage;