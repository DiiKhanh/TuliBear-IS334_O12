import { useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ThumbsGallery from "./ThumbsGallery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { valueLabelFormat } from "~/utils/format";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Review from "./Review";
import RecommendSlide from "./RecommendSlide";
import Label from "~/components/label/Label";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CustomButton from "~/layouts/header/CustomButton";
import { productsPage } from "~/_mock/product.js";
import QuantityInput from "~/components/number-input/NumberInput";
import { useCartStore } from "~/store/useCartStore";
import { toast } from "sonner";
import { useOrderStore } from "~/store/useOrderStore";
import { useEffect, useRef } from "react";

const reviews = [
  {
    user: {
      uid: 1,
      displayName: "DK",
      photoURL: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    content: "đẹp",
    id: 1,
    createAt: "12-12-2023 10:16"
  }
];


const ProductDetailView = () => {
  const { id } = useParams();
  const product = productsPage.find((item) => item.id === Number(id));
  const ref = useRef();

  const { addItemToCart } = useCartStore();
  const onAddToCart = () => {
    const quantity = ref.current.getValue();
    addItemToCart(product, quantity);
  };


  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === "sale" && "error") || "info"}
      sx={{
        textTransform: "uppercase"
      }}
    >
      {product.status}
    </Label>
  );

  const renderPrice = (
    <Typography variant="subtitle1" fontSize="24px">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through"
        }}
      >
        {product.priceSale && (valueLabelFormat(product.price))}
      </Typography>
      &nbsp;
      {product.priceSale ? (valueLabelFormat(product.priceSale)) : (valueLabelFormat(product.price))}
    </Typography>
  );
  const navigate = useNavigate();
  const { buyNow, removeOrder } = useOrderStore();

  useEffect(() => {
    removeOrder();
  }, [removeOrder]);

  const handleBuyNow = (product) => {
    const quantity = ref.current.getValue();
    buyNow(product, quantity);
    setTimeout(() => navigate("/checkout"), 1000);
    toast.success("Di chuyển đến trang thanh toán!");
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "50px" }}>
        <Stack direction={ { xs: "column", md:"row" }} spacing={2} marginTop={10}>
          {/* gallery slide */}
          <Box width={{ xs:"100%", md:"50%" }}>
            <ThumbsGallery image={product?.images}/>
          </Box>
          {/* gallery slide */}
          {/* info */}
          <Box width={{ xs:"100%", md:"50%" }}>
            <Stack flexDirection="column" spacing={1} marginLeft={2}>
              <Breadcrumbs aria-label="breadcrumb" sx={{ textTransform:"uppercase" }}>
                <Link underline="hover" color="inherit" href="/">
                  TuliBear
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/dog"
                >
                Sản phẩm
                </Link>
                <Typography color="text.primary">{product?.name}</Typography>
              </Breadcrumbs>
              <Typography variant="h4" maxWidth={400} textTransform="capitalize" fontWeight="bold" lineHeight="40px">
                {`${product?.name} ${product?.id}`}
              </Typography>
              <Typography color="primary.price" fontSize="21px">
                {renderPrice}
              </Typography>
              <Divider sx={{ maxWidth:"400px" }}/>
              <Stack direction="column" spacing={2} textTransform="capitalize">
                <Typography component="p" fontWeight="bold" fontSize="20px"
                >Mô tả:{" "}
                  <Typography component="span">{product?.description}</Typography>
                </Typography>
                <Typography component="p" fontWeight="bold" fontSize="20px"
                >Tình trạng:{" "}
                  {product.status && renderStatus}
                </Typography>
                <Box
                  sx={{
                    width: 300,
                    display: "flex",
                    alignItems: "start",
                    flexDirection:"column",
                    gap:3
                  }}
                >
                  <Box display="flex"> <Rating
                    name="text-feedback"
                    value={5}
                    readOnly
                    precision={1}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  <Box sx={{ ml: 2 }}>Yêu thích</Box></Box>

                  <QuantityInput
                    inStock={product.inStock}
                    numberInputRef={ref}
                  />

                  <Typography sx={{ textTransform:"lowercase" }}>
                    {product.inStock} sản phẩm có sẵn
                  </Typography>
                </Box>
              </Stack>
              <Box marginTop="40px !important" display="flex" alignItems="center" gap={5}>
                <Button variant="contained" size="large" onClick={onAddToCart}>
                Thêm vào giỏ hàng
                </Button>
                <div onClick={() => handleBuyNow(product)}>
                  <CustomButton backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="Mua ngay"
                  />
                </div>
              </Box>
            </Stack>
          </Box>
          {/* info */}
        </Stack>
        {/* des */}
        {/* des */}
        {/* review */}
        <Box marginY={5}>
          <Review reviews={reviews} />
        </Box>
        {/* review */}

        <RecommendSlide products={productsPage.slice(0, 5)}/>

      </Container>
    </>
  );
};

export default ProductDetailView;