import { Helmet } from "react-helmet-async";
import ProductPageView from "~/sections/products/ProductPageView";

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title> Product | TuliBear </title>
      </Helmet>
      <ProductPageView />
    </>
  );
};

export default ProductPage;