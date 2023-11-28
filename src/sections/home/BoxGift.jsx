import { Box, styled, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RateReviewIcon from "@mui/icons-material/RateReview";


const BoxGift = ({ img, price, description, views, likes, reviews }) => {
  const GiftBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    boxShadow:"-5px 1px 20px 0px rgba(84,28,65,0.55)",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0)
    },
    cursor:"pointer"
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%"
  }));

  return (
    <GiftBox>
      <ImgContainer>
        <img src={img} alt="housePhoto" style={{ maxWidth: "100%", objectFit:"cover" }}
        />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {(new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price))}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <InfoBox>
            <VisibilityIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {views}
            </Typography>
          </InfoBox>

          <InfoBox>
            <FavoriteIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {likes}
            </Typography>
          </InfoBox>

          <InfoBox>
            <RateReviewIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {reviews}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </GiftBox>
  );
};

export default BoxGift;