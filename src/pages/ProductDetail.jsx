import { Helmet } from "react-helmet-async";
import ProductDetailView from "~/sections/detail/ProductDetailView";

const ProductDetail = () => {
  return (
    <>
      <Helmet>
        <title> Product Detail | TuliBear </title>
      </Helmet>
      <ProductDetailView />
    </>
  );
};

export default ProductDetail;