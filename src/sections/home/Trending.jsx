import { Box, Container, styled, Typography } from "@mui/material";
import BoxGift from "./BoxGift";
import products from "~/_mock/product";

const Trending = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Sản phẩm nổi bật
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Những sản phẩm đang thịnh hành tại cửa hàng.
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {products.map((property) => (
            <BoxGift
              key={property.id}
              img={property.img}
              price={property.price}
              description={property.description}
              views={property.views}
              likes={property.likes}
              reviews={property.reviews}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Trending;