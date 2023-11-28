import { useParams } from "react-router-dom";
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


const ProductDetailView = () => {
  const { id } = useParams();
  const product = productsPage.find((item) => item.id === Number(id));

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
    <Typography variant="p" fontWeight="bold">
      <Typography
        component="span"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through"
        }}
      >
        {product.priceSale && (valueLabelFormat(product.priceSale))}
      </Typography>
      &nbsp;
      {valueLabelFormat(product.price)}
    </Typography>
  );

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
                    alignItems: "center"
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={5}
                    readOnly
                    precision={1}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  <Box sx={{ ml: 2 }}>Yêu thích</Box>
                </Box>
              </Stack>
              <Box marginTop="40px !important" display="flex" alignItems="center" gap={5}>
                <Button variant="contained" size="large">
                Thêm vào giỏ hàng
                </Button>
                <CustomButton backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="Mua ngay" />
              </Box>
            </Stack>
          </Box>
          {/* info */}
        </Stack>
        {/* des */}
        {/* des */}
        {/* review */}
        {/* <Review /> */}
        {/* review */}

        {/* <RecommendSlide /> */}

      </Container>
    </>
  );
};

export default ProductDetailView;